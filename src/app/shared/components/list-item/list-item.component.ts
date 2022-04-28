import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import ApiResponse from "../../models/api-response.model";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "[app-list-item]",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ListItemComponent implements OnInit {
  @Input() listItem: ApiResponse;
  constructor() {}

  ngOnInit() {}
}
