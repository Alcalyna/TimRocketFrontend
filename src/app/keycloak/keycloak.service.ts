import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpKeycloakService} from "./http-keycloak.service";
import {tap} from "rxjs/operators";
import * as JWT from "jwt-decode";
import {KeycloakToken} from "./keycloak-token";
import {Member} from "../../model/Member";
import {MemberService} from "../../service/member.service";
import {KeycloakTokenResponse} from "./keycloakTokenResponse";


@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private readonly token_key_name = 'access_token';
  private _loggedInUser$: Subject<string | null> = new Subject();
  private currentUser: Subject<Member> = new Subject<Member>();

  constructor(
    private httpKeycloakService: HttpKeycloakService,
    private memberService: MemberService
  ) {}

  get loggedInUser$(): Observable<string | null> {
    return this._loggedInUser$;
  }

  getToken(): string | null {
    return localStorage.getItem(this.token_key_name);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logIn(loginData: any): Observable<KeycloakTokenResponse> {
    this.memberService.getMemberBy(loginData.email).subscribe(member => this.currentUser.next(member));
    return this.httpKeycloakService.logIn(loginData)
      .pipe(tap(response => this.setToken(response.access_token)));
  }

  get currentMember(): Observable<Member> {
    return this.currentUser;
  }

  logout(): void {
    localStorage.removeItem(this.token_key_name);
    this.sendSignal();
  }

  private setToken(accessToken: string) {
    localStorage.setItem(this.token_key_name, accessToken);
    this.sendSignal();
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
}
