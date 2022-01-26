import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {KeycloakService} from "./keycloak.service";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private keycloakService: KeycloakService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.keycloakService.isLoggedIn()) {
      // this.router.navigateByUrl("/login");
      return next.handle(req);
    }

    // if (this.router.url === '/login') {
    //   return next.handle(req);
    // }

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.keycloakService.getToken()}`
      }
    })
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 403 || err.status === 401) {
          this.router.navigateByUrl("/error");
        } else if (err.status === 0) {
          this.router.navigateByUrl("/backend-unavailable")
        }
        return throwError(err);
      }));
  }
}
