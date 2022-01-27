import {Component, OnInit} from '@angular/core';

import {UserService} from "../../service/user.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/User";
import {Router} from "@angular/router";
import {ConfirmedValidator} from "./ConfirmedValidator";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public error: any;

  createUserForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.maxLength(25)]],
    lastName: ['', [Validators.required, Validators.maxLength(25)]],
    company: ['', Validators.maxLength(25)],
    email: ['', [Validators.required, Validators.maxLength(50), Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).*$")]],
    passwordVerification: ['']
  }, {validators: ConfirmedValidator('password', 'passwordVerification')})

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const userToCreate = this.createUserForm.value as User;
    this.userService.createUser(userToCreate)
      .subscribe(success => {
          this.router.navigate(['login']);
        }
        ,
        error => {
          this.error = error;
        }
      );
  }

  get firstName(): FormControl {
    return this.createUserForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.createUserForm.get('lastName') as FormControl;
  }

  get email(): FormControl {
    return this.createUserForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.createUserForm.get('password') as FormControl;
  }

  get passwordVerification(): FormControl {
    return this.createUserForm.get('passwordVerification') as FormControl;
  }

  get company(): FormControl {
    return this.createUserForm.get('company') as FormControl;
  }

}
