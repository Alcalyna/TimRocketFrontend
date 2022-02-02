import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {KeycloakService} from "../keycloak/keycloak.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  message!: string;
  ctlEmail!: FormControl;
  ctlPassWord!: FormControl;
  public error: any;

  constructor(
    private formBuilder: FormBuilder,
    private keycloakService: KeycloakService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.ctlEmail = this.formBuilder.control("", [Validators.required, Validators.email, Validators.maxLength(50)]);
    this.ctlPassWord = this.formBuilder.control("", [Validators.required]);
    this.loginForm = this.formBuilder.group({
      email: this.ctlEmail,
      password: this.ctlPassWord
    })
  }

  onSubmit(loginData: any) {
    this.keycloakService.logIn(loginData)
      .subscribe(success => {this.router.navigateByUrl('/profile')
      },
        error => {
        this.error = "Your password is incorrect or this account doesn't exist." + "Please reset your password or create a new account.";
        console.log(error);
        });
    console.log(this.keycloakService.getUsername());
  }


  reset() {
  }

}
