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
  constructor() {
    // this.initSource();
  }
  // basic http
  private http = {
    get: (url: string): Observable<ApiResponse[]> => of(ApiResponseExampleList),
  };

  public getAllElements(): Observable<ApiResponse[]> {
    // this.listObservable = of(ApiResponseExample);\

    return this.http.get("").pipe(
      map((res) => {
        return res;
      }),
      tap((res) => this.listSubject.next(res))
    );
  }

  // private

  /*
  public getAllElements(): Subject<ApiResponse[]> {
    // return this.listObservable;
    this.listSubject.subscribe((res) => console.log(res));
    return this.listSubject;
  }
  */

  public addNewElement(el: ApiResponse): void {
    this.listSubject.subscribe((current) => {
      current.push(el);
      this.listSubject.next(current);
    });
  }

  public editElement(index: string, el: ApiResponse): void {}
}
