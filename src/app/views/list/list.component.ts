import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import ApiResponse from "src/app/shared/models/api-response.model";
import { ApiService } from "src/app/shared/services/api.service";
import { MatTableDataSource, Sort } from "@angular/material";
import { Router } from "@angular/router";
import { SavedService } from "src/app/shared/services/saved.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
  providers: [ApiService, SavedService],
})
export class ListComponent implements OnInit {
  list: Observable<ApiResponse[]>;
  unsortedList: ApiResponse[];
  sortedList: ApiResponse[];
  sortedTable: MatTableDataSource<ApiResponse>;
  savedElementsIds: number[];
  displayedColumns: string[] = [
    "name",
    "description",
    "trigger",
    "interimtrigger",
    "modifyDate",
    "buttons",
  ];

  optionButtons: {
    icon: string;
    name: string;
    function: (id: number, ...args) => any;
  }[] = [
    {
      name: "view",
      icon: "/assets/icons/eye.svg",
      function: this.viewElement.bind(this),
    },
    {
      name: "edit",
      icon: "/assets/icons/edit.svg",
      function: this.editElement.bind(this),
    },
    {
      name: "save",
      icon: "/assets/icons/save.svg",
      function: this.saveElement.bind(this),
    },
    {
      name: "delete",
      icon: "/assets/icons/trash.svg",
      function: this.deleteElement.bind(this),
    },
  ];

  constructor(
    private router: Router,
    private apiService: ApiService,
    private savedService: SavedService
  ) {}

  ngOnInit() {
    this.setupSubscriptions();
  }

  setupSubscriptions() {
    this.apiService.listSubject.subscribe((res) => {
      this.unsortedList = res;
      this.sortedTable = new MatTableDataSource(this.unsortedList);
    });

    this.apiService
      .getAllElements()
      .toPromise()
      .then((res) => {
        this.unsortedList = res;
        this.sortedTable = new MatTableDataSource(this.unsortedList);
      });

    this.savedService
      .getSavedElementsSubject()
      .subscribe((savedElementsIds) => {
        this.savedElementsIds = savedElementsIds;
      });
  }

  sortData(sort: Sort) {
    const data = this.unsortedList.slice();
    if (!sort.active || sort.direction === "") {
      this.sortedTable = new MatTableDataSource(data);
      return;
    }

    const newData = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "name":
          return this.compare(a.name, b.name, isAsc);
        case "description":
          return this.compare(a.description, b.description, isAsc);
        case "interimtrigger":
          return this.compare(a.interimtrigger, b.interimtrigger, isAsc);
        case "modifyDate":
          return this.compare(a.modifyDate, b.modifyDate, isAsc);
        default:
          return 0;
      }
    });

    this.sortedTable = new MatTableDataSource(newData);
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  applyFilter(filterValue: string) {
    this.sortedTable.filter = filterValue.trim().toLowerCase();

    if (this.sortedTable.paginator) {
      this.sortedTable.paginator.firstPage();
    }
  }

  editElement(elementId: number): void {
    this.router.navigate([`/edit-element/${elementId}`]);
  }

  viewElement(elementId: number): void {
    this.router.navigate([`/view-element/${elementId}`]);
  }

  deleteElement(elementId: number): void {
    this.apiService.deleteElement(elementId);
  }

  saveElement(elementId: number): void {
    if (!this.savedElementsIds.includes(elementId)) {
      this.savedService.saveElementId(elementId);
    } else {
      this.savedService.unsaveElementId(elementId);
    }
  }
}
