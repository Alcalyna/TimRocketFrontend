import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SessionService} from "../../service/session.service";
import {UserService} from "../../service/user.service";
import {User} from "../../model/User";
import {Session} from "../../model/Session";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-request-a-session',
  templateUrl: './request-a-session.component.html',
  styleUrls: ['./request-a-session.component.css']
})
export class RequestASessionComponent implements OnInit {

  public error: any;
  private user!: User;


  sessionForm: FormGroup = this.formBuilder.group({
    sessionId: '',
    subject: '',
    date: '',
    time: '',
    location: '',
    f2fLocation: '',
    remarks: ''
  });

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private sessionService: SessionService,
              private userService: UserService,
              private datePipe: DatePipe) {

  }

  ngOnInit(): void {
    this.userService.getcurrentUser()
      .subscribe(user => this.user = user);
  }

  ngAfterViewInit(){
    $(document).ready(function () {
      $('.datepicker').datepicker();
      $('.timepicker').timepicker();
    });
  }


  onSubmit() {
    const sessionToCreate = this.sessionForm.value as Session;
    this.datePipe.transform(sessionToCreate.date, 'yyyy-MM-dd');
    sessionToCreate.coach_id = this.activatedRoute.snapshot.paramMap.get('id')!;
    sessionToCreate.coachee_id = this.user.userId;
    this.sessionService.createSession(sessionToCreate)
      .subscribe(success => {
          this.router.navigate(['profile']);
        },
        error => {
          this.error = error;
        }
      );
  }
}
