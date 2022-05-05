import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { ApiResponseExampleList } from "../files/api-response-example";
import ApiResponse from "../models/api-response.model";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  listSubject: BehaviorSubject<ApiResponse[]> = new BehaviorSubject([]);
  constructor() {}
  // basic http
  private http = {
    get: (url: string): Observable<ApiResponse[]> => of(ApiResponseExampleList),
  };

  public getAllElements(): Observable<ApiResponse[]> {
    return this.http.get("").pipe(
      map((res) => {
        return res;
      }),
      tap((res) => this.listSubject.next(res))
    );
  }

  public addNewElement(el: ApiResponse): void {
    const current = this.listSubject.getValue();
    current.push(el);
    this.listSubject.next(current);
  }

  public editElement(el: ApiResponse): void {
    const current = this.listSubject.getValue();
    const editedElementIndex = current.findIndex(
      (element) => element.id === el.id
    );
    current[editedElementIndex] = el;
    this.listSubject.next(current);
  }

  public deleteElement(elementId: number): void {
    const current = this.listSubject.getValue();
    current.splice(
      current.findIndex((el) => el.id === elementId),
      1
    );
    this.listSubject.next(current);
  }

  public getElement(id: number | string): Observable<ApiResponse> {
    typeof id === "string" ? (id = parseInt(id, 10)) : (id = id);
    return this.http.get("").pipe(
      map((res) => {
        return res.find((el) => el.id === id);
      })
    );
  }
}
