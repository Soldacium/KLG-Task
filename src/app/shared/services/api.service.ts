import { Injectable } from "@angular/core";
import { from, Observable, of, Subject } from "rxjs";
import { map, tap } from "rxjs/operators";
import { ApiResponseExampleList } from "../files/api-response-example";
import ApiResponse from "../models/api-response.model";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  listSubject: Subject<ApiResponse[]> = new Subject();
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
    this.listSubject.subscribe((current) => {
      current.push(el);
      this.listSubject.next(current);
    });
  }

  public editElement(id: number, el: ApiResponse): void {}

  public deleteElement(id: number): void {}

  public getElement(id: number): Observable<ApiResponse> {
    return this.http.get("").pipe(
      map((res) => {
        return res[0]; // res.filter((el) => el.id === id)[0];
      })
    );
  }
}
