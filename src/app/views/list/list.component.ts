import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ApiResponseExample } from "src/app/shared/files/api-response-example";
import ApiResponse from "src/app/shared/models/api-response.model";
import { ApiService } from "src/app/shared/services/api.service";
import { Sort } from "@angular/material";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  list: Observable<ApiResponse[]>;
  unsortedList: ApiResponse[];
  sortedList: ApiResponse[];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.setupSubscription();
  }

  setupSubscription() {
    this.list = this.apiService.getAllElements();
    this.list.subscribe((res) => {
      this.unsortedList = res;
      this.sortedList = this.unsortedList;
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
    if (!sort.active || sort.direction === "") {
      this.sortedList = data;
      return;
    }

    this.sortedList = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "name":
          return this.compare(a.name, b.name, isAsc);
        case "description":
          return this.compare(a.description, b.description, isAsc);
        case "triggerName":
          return this.compare(a.interimtrigger, b.interimtrigger, isAsc);
        case "deadline":
          return this.compare(a.modifyDate, b.modifyDate, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
