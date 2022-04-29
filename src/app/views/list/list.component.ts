import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ApiResponseExample } from "src/app/shared/files/api-response-example";
import ApiResponse from "src/app/shared/models/api-response.model";
import { ApiService } from "src/app/shared/services/api.service";
import { MatTableDataSource, Sort } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  list: Observable<ApiResponse[]>;
  unsortedList: ApiResponse[];
  sortedList: ApiResponse[];
  sortedTable: MatTableDataSource<ApiResponse>;
  displayedColumns: string[] = [
    "name",
    "description",
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
      name: "save",
      icon: "/assets/icons/eye.svg",
      function: this.viewElement,
    },
    {
      name: "save",
      icon: "/assets/icons/edit.svg",
      function: this.editElement,
    },
    {
      name: "save",
      icon: "/assets/icons/save.svg",
      function: this.saveElement,
    },
    {
      name: "save",
      icon: "/assets/icons/trash.svg",
      function: this.deleteElement,
    },
  ];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.setupSubscription();
  }

  setupSubscription() {
    this.list = this.apiService.getAllElements();
    this.list.subscribe((res) => {
      this.unsortedList = res;
      this.sortedTable = new MatTableDataSource(this.unsortedList);
    });
    /*
    this.list.subscribe((res) => {
      console.log(res);
    });

    this.apiService.addNewElement(ApiResponseExample);
    */
  }

  sortData(sort: Sort) {
    const data = this.unsortedList.slice();
    console.log(data, sort);
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
    this.router.navigate([`/edit/${elementId}`]);
  }

  viewElement(elementId: number): void {
    this.router.navigate([`/view-element/${elementId}`]);
  }

  deleteElement(elementId: number): void {
    this.apiService.deleteElement(elementId);
  }

  saveElement(elementId: number): void {
    // this.apiService.
  }
}
