import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Session} from "../../model/Session";
import {Observable, Subscription} from "rxjs";
import {SessionService} from "../../service/session.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-sessions-overview-coachee',
  templateUrl: './sessions-overview-coachee.component.html',
  styleUrls: ['./sessions-overview-coachee.component.css']
})
export class SessionsOverviewCoacheeComponent implements OnInit {

  sessions!: Observable<Session[]>
  user!: Observable<User>;

  constructor(private userService: UserService,
              private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessions = this.sessionService.getAllSessions()
    // console.log(this.userService.getUser(id).subscribe())
  }

  getUserFullName(id: string) {
    console.log(this.userService.getUser(id).subscribe(
    ));
  }

}
