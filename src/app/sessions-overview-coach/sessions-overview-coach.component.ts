import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Session} from "../../model/Session";
import {User} from "../../model/User";
import {UserService} from "../../service/user.service";
import {SessionService} from "../../service/session.service";
import {KeycloakService} from "../keycloak/keycloak.service";

@Component({
  selector: 'app-sessions-overview-coach',
  templateUrl: './sessions-overview-coach.component.html',
  styleUrls: ['./sessions-overview-coach.component.css']
})
export class SessionsOverviewCoachComponent implements OnInit {

  sessions!: Observable<Session[]>
  user!: Observable<User>;
  currentUser!: User;

  constructor(private userService: UserService,
              private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessions = this.sessionService.getAllSessions()
    this.currentUser = JSON.parse(localStorage.getItem('loggedInUser')!)
    console.log("here !")
  }
}
