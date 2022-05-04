import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import ApiResponse from "src/app/shared/models/api-response.model";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-view-element",
  templateUrl: "./view-element.component.html",
  styleUrls: ["./view-element.component.scss"],
})
export class ViewElementComponent implements OnInit {
  element: ApiResponse;
  elementId = -1;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.setupElementIdSubsription();
  }

  ngOnInit() {
    this.getElementData(this.elementId);
  }

  setupElementIdSubsription(): void {
    this.route.params.subscribe((params) => {
      this.elementId = params["id"] as number;
    });
  }

  getElementData(elementId: number): void {
    this.apiService.getElement(elementId).subscribe((el) => {
      this.element = el;
      console.log(this.element);
    });
  }
}
