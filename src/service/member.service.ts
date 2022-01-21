import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {map, Observable} from 'rxjs';
import {Member} from "../model/Member";
/*import { plainToClass } from 'class-transformer';*/


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  url: string

  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/members`;
  }

  getMembers(): Observable<Member[]> {
    return this.http.get<any[]>(this.url);
  }

  createMember(member: Member): Observable<Member> {
    return this.http.post<Member>(this.url, member);
  }

  getMemberBy(email: string): Observable<Member> {
    return this.http.get<Member>(`${this.url}/${email}`);
  }
}
