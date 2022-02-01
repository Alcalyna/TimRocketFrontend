import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpKeycloakService} from "./http-keycloak.service";
import {tap} from "rxjs/operators";
import * as JWT from "jwt-decode";
import {KeycloakToken} from "./keycloak-token";
import {User} from "../../model/User";
import {UserService} from "../../service/user.service";
import {KeycloakTokenResponse} from "./keycloakTokenResponse";


@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private readonly token_key_name = 'access_token';
  private readonly refresh_token_key_name = 'refresh_token';
  private _loggedInUser$: Subject<string | null> = new Subject();
  private _currentUser: Subject<User> = new Subject<User>();

  constructor(
    private httpKeycloakService: HttpKeycloakService,
    private userService: UserService
  ) {

  }

  get loggedInUser$(): Observable<string | null> {
    return this._loggedInUser$;
  }

  getToken(): string | null {
    return localStorage.getItem(this.token_key_name);
  }

  getRefreshToken() : string | null {
    // console.log("This is the refresh token (should be the same): " + localStorage.getItem(this.refresh_token_key_name));
    return localStorage.getItem(this.refresh_token_key_name);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logIn(loginData: any): Observable<KeycloakTokenResponse> {
    return this.httpKeycloakService.logIn(loginData)
      .pipe(tap(response => {this.setToken(response.access_token), this.setRefreshToken(response.refresh_token)}));
  }

  get currentUser(): Subject<User> {
    return this._currentUser;
  }

  logout(): void {
    localStorage.removeItem(this.token_key_name);
    this.sendSignal();
  }

  private setToken(accessToken: string) {
    localStorage.setItem(this.token_key_name, accessToken);
    // console.log("This is the token: " + accessToken);
    this.userService.getUserBy(this.getUsername());
    this.sendSignal();
  }

  private setRefreshToken(refreshToken: string) {
    localStorage.setItem(this.refresh_token_key_name, refreshToken);
    // console.log("This is the refresh token: " + refreshToken);
  }

  sendSignal(): void {
    this._loggedInUser$.next(this.getUsername());
  }

  public getUsername(): string {
    let token = this.getToken();
    if (token) {
      return (JWT.default(token) as KeycloakToken).preferred_username
    }
    return "";
    //this returned null, so maybe refactoring is needed.
  }

  refreshToken(): Observable<KeycloakTokenResponse> {
    return this.httpKeycloakService.refreshToken(this.getRefreshToken()!)
      .pipe(tap(response => {this.setToken(response.access_token)}));
  }

}
