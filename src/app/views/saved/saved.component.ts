import { Component, OnInit } from "@angular/core";
import ApiResponse from "src/app/shared/models/api-response.model";
import { ApiService } from "src/app/shared/services/api.service";
import { SavedService } from "src/app/shared/services/saved.service";

@Component({
  selector: "app-saved",
  templateUrl: "./saved.component.html",
  styleUrls: ["./saved.component.scss"],
  providers: [SavedService, ApiService],
})
export class SavedComponent implements OnInit {
  savedElements: ApiResponse[] = [];
  constructor(
    private savedService: SavedService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.getSavedElements(this.getSavedElementsIds());
  }

  getSavedElements(elementIds: number[]) {
    elementIds.forEach((id) => {
      this.apiService
        .getElement(id)
        .toPromise()
        .then((el) => {
          this.savedElements.push(el);
        });
    });
  }

  getSavedElementsIds(): number[] {
    return this.savedService.getSavedElementsIdsFromStorage();
  }
}
