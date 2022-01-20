import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MemberInformationDTOService {

  url: string

  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/members`;
  }

  getMembers(): Observable<any> {
    return this.http.get(this.url);
  }
}
