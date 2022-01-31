import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {KeycloakTokenResponse} from "./keycloakTokenResponse";


@Injectable({
  providedIn: 'root'
})
export class HttpKeycloakService {

  private url = `https://keycloak.switchfully.com/auth/realms/java-oct-2021/protocol/openid-connect/token`
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
  };

  constructor(private http: HttpClient) {
  }

  logIn(loginData: any): Observable<KeycloakTokenResponse> {
    const body = new URLSearchParams();
    body.set('username', loginData.email);
    body.set('email', loginData.email);
    body.set('password', loginData.password);
    body.set('client_id', 'CodeCoachTimRocket');
   // body.set('client_secret', '37ceed79-e027-4c98-a4d4-e691bc564574');
    body.set('grant_type', 'password');
    return this.http.post<KeycloakTokenResponse>(this.url, body.toString(), this.httpOptions);
  }

  refreshToken(token: string): Observable<KeycloakTokenResponse> {
    console.log("The refresh token: " + token)
    const body = new URLSearchParams();
    body.set('client_id', 'CodeCoachTimRocket');
    body.set('grant_type', 'refresh_token');
    body.set('refresh_token', token);
    console.log("We are now here!");
    return this.http.post<KeycloakTokenResponse>(this.url, body.toString(), this.httpOptions)
  }

  // Method: POST
  // URL: https://keycloak.example.com/auth/realms/myrealm/protocol/openid-connect/token
  // Body type: x-www-form-urlencoded
  // Form fields:
  // client_id : <my-client-name>
  // grant_type : refresh_token
  // refresh_token: <my-refresh-token>


}
