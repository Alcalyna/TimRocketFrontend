import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from 'rxjs';
import {User} from "../model/User";
import {Coach} from "../model/Coach";
import {ProfileUpdate} from "../model/ProfileUpdate";
import {Topic} from "../model/Topic";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _currentUser!: Observable<User>

  url: string
  currentUser!: User;

  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/users`;
  }

  // getUsers(): Observable<User[]> {
  //   return this.http.get<any[]>(this.url);
  // }

  getCoaches(): Observable<Coach[]> {
    return this.http.get<any[]>(`${this.url}?coach=`)
  }

  getTopics(): Observable<Topic[]>{
    return this.http.get<any[]>(`${environment.backendUrl}/topics`)
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  getUserBy(email: string): Observable<User> {
    return this.http.get<User>(`${this.url}?email=` + email);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  getCoach(id: string): Observable<Coach>{
    return this.http.get<Coach>(`${this.url}/${id}?coach=`);
  }

  setCurrentUser(email: string) {
    this._currentUser = this.getUserBy(email);
  }

  editProfile(id: String, profileUpdate: ProfileUpdate): Observable<User> {
    return this.http.put<User>(`${this.url}/${id}`, profileUpdate);
  }

  editRoleToCoach(id : String): Observable<User> {
    return this.http.put<User>(this.url, id);
  }


}
