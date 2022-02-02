import { Injectable } from '@angular/core';
import {User} from "../model/User";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {Session} from "../model/Session";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  url: string

  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/sessions`;
  }

  createSession(session: Session): Observable<Session> {
    return this.http.post<Session>(this.url, session);
  }
}
