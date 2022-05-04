import { Injectable } from "@angular/core";

import { BehaviorSubject, Subject } from "rxjs";
import ApiResponse from "../models/api-response.model";

// inject as provider so observables close as it closes
@Injectable({
  providedIn: "root",
})
export class SavedService {
  private savedElementsKey = "savedElementsKey";
  private savedElementsIds: BehaviorSubject<number[]> = new BehaviorSubject([]);

  constructor() {
    this.observeSavedChanges();
  }

  private observeSavedChanges() {
    const savedElementsIds = this.getSavedElementsIdsFromStorage();
    this.savedElementsIds.subscribe((elementsIds) => {
      this.updateLocalStorage(elementsIds);
    });
    this.updateLocalStorage(savedElementsIds);
  }

  public getSavedElementsIdsFromStorage(): number[] {
    const elementsIds = JSON.parse(
      localStorage.getItem(this.savedElementsKey) as string
    ) as number[] | undefined;

    if (!elementsIds) {
      this.updateLocalStorage([]);
      this.savedElementsIds.next([]);
    } else {
      this.savedElementsIds.next(elementsIds);
    }

    return elementsIds || [];
  }

  public getSavedElementsSubject(): BehaviorSubject<number[]> {
    return this.savedElementsIds;
  }

  public saveElementId(elementId: number): void {
    const ids = this.savedElementsIds.getValue();
    ids.push(elementId);
    this.savedElementsIds.next(ids);
  }

  public unsaveElementId(elementId: number): void {
    const newIds = this.savedElementsIds
      .getValue()
      .filter((id) => id !== elementId);
    this.savedElementsIds.next(newIds);
  }

  public updateLocalStorage(elements: number[]): void {
    localStorage.setItem(this.savedElementsKey, JSON.stringify(elements));
  }
}
