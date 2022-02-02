import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SessionService} from "../../service/session.service";
import {UserService} from "../../service/user.service";
import {User} from "../../model/User";
import {Session} from "../../model/Session";
import DatepickerOptions = M.DatepickerOptions;
import {now} from "jquery";


@Component({
  selector: 'app-request-a-session',
  templateUrl: './request-a-session.component.html',
  styleUrls: ['./request-a-session.component.css']
})
export class RequestASessionComponent implements OnInit {

  public error: any;
  private user!: User;
  datePickerElem: any;
  timePickerElem: any;

  sessionForm: FormGroup =      this.formBuilder.group({
    subject: ['', [Validators.required, Validators.maxLength(25)]],
    date: ['', [Validators.required]],
    time: ['', [Validators.required]],
    location: ['', [Validators.required]],
    f2fLocation: ['', [Validators.required]],
    remarks: ['', [Validators.maxLength(250)]]
  });

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private sessionService: SessionService,
              private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getcurrentUser()
      .subscribe(user => this.user = user);
    this.setValidators();
  }

  private setValidators() {
    this.sessionForm.get('location')?.valueChanges.subscribe(
      result => {
        if (result === 'f2f') {
          this.sessionForm.get('f2fLocation')?.setValidators(Validators.required);
        } else {
          this.sessionForm.get('f2fLocation')?.setValidators(null);
        }
        this.sessionForm.get('f2fLocation')?.updateValueAndValidity();
      })
  }

  ngAfterViewInit() {
    $(document).ready(() => {
      this.initializeDatePicker();
      this.initializeTimePicker();
      $('select').formSelect();
    });

  }

  private initializeDatePicker(): void {
    const elems = document.querySelectorAll('.datepicker');
    const instances = M.Datepicker.init(elems, {
      format: 'yyyy-mm-dd',
      minDate: new Date(),
      onClose: () => {
        this.sessionForm.get('date')?.patchValue(this.datePickerElem.toString());
        this.sessionForm.updateValueAndValidity({onlySelf: false, emitEvent: true});
      }
    } as DatepickerOptions);

    for (const instance of instances) {
      if (instance !== undefined) {
        this.datePickerElem = instance;
      }
    }
  }

  private initializeTimePicker(): void {
    const elems = document.querySelectorAll('.timepicker');
    const instances = M.Timepicker.init(elems, {
      'twelveHour': false,
      'onCloseEnd': () => {
        this.sessionForm.get('time')?.patchValue(this.timePickerElem.time);
        this.sessionForm.updateValueAndValidity({onlySelf: false, emitEvent: true});
      }
    });
    for (const instance of instances) {
      if (instance !== undefined) {
        this.timePickerElem = instance;
      }
    }
  }

  get subject(): FormControl {
    return this.sessionForm.get('subject') as FormControl;
  }

  get date(): FormControl {
    return this.sessionForm.get('date') as FormControl;
  }

  get remarks(): FormControl {
    return this.sessionForm.get('remarks') as FormControl;
  }

  get time(): FormControl {
    return this.sessionForm.get('time') as FormControl;
  }

  get location(): FormControl {
    return this.sessionForm.get('location') as FormControl;
  }

  get f2fLocation(): FormControl {
    return this.sessionForm.get('f2fLocation') as FormControl;
  }


  onSubmit() {
    const sessionToCreate = this.sessionForm.value as Session;
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
