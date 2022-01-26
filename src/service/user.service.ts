import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from 'rxjs';
import {User} from "../model/User";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string
  currentUser! : User;

  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/users`;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<any[]>(this.url);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  getUserBy(email: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${email}`);
  }

  editProfile(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${user?.userId!}`, user);
  }
}
