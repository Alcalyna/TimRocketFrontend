import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
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

  constructor(private formBuilder: FormBuilder, private keycloakService: KeycloakService, private router: Router) {
  }

   ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  onSubmit(loginData: any) {
    console.log(loginData)
    this.keycloakService.logIn(loginData)
      .subscribe(_ => this.message = 'Success!', err => this.message = 'Wrong username and/or password!')
  }

  reset(){

  }



}
