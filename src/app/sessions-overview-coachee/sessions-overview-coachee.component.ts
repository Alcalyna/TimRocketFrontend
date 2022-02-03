import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Session} from "../../model/Session";
import {Observable, Subscription} from "rxjs";
import {SessionService} from "../../service/session.service";
import {User} from "../../model/User";
import {KeycloakService} from "../keycloak/keycloak.service";

@Component({
  selector: 'app-sessions-overview-coachee',
  templateUrl: './sessions-overview-coachee.component.html',
  styleUrls: ['./sessions-overview-coachee.component.css']
})
export class SessionsOverviewCoacheeComponent implements OnInit {

  sessions!: Observable<Session[]>
  user!: Observable<User>;
  currentUser!: User;

  constructor(private userService: UserService,
              private sessionService: SessionService,
              private keyCloakService: KeycloakService) { }

  ngOnInit(): void {
    this.sessions = this.sessionService.getAllSessions()
    this.currentUser = JSON.parse(localStorage.getItem('loggedInUser')!)
    console.log(this.currentUser)
  }

  isACoachee(): boolean {
    if (this.keyCloakService.isLoggedIn()) {
      return JSON.parse(localStorage.getItem('loggedInUser')!).role.toLowerCase() === 'coachee';
    }
    return false;
  }

}
