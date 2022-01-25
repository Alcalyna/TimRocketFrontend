import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";
import {KeycloakService} from "../keycloak/keycloak.service";
import {UserService} from "../../service/user.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Route} from "@angular/router";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  currentUser!: User;
  loggedInUser! : boolean
  editForm!: FormGroup;
  ctlFirstName!: FormControl;
  ctlLastName!: FormControl;
  ctlEmail!: FormControl;
  ctlRole!: FormControl;


  constructor(
    private formBuilder: FormBuilder,
    private keyCloakService: KeycloakService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.ctlFirstName = this.formBuilder.control("",[Validators.maxLength(25), Validators.minLength(2)]);
    this.ctlLastName = this.formBuilder.control("",[Validators.maxLength(25), Validators.minLength(2)]);
    this.ctlEmail = this.formBuilder.control("", [Validators.email, Validators.maxLength(50)]);
    this.ctlRole = this.formBuilder.control("", []);

    this.editForm = this.formBuilder.group({
      firstName: this.ctlFirstName,
      lastName: this.ctlLastName,
      email: this.ctlEmail,
      role: this.ctlRole
    });

    this.userService.getUserBy(this.keyCloakService.getUsername()).subscribe(user => this.currentUser = user);
    this.loggedInUser = this.keyCloakService.isLoggedIn();
    console.log(this.currentUser);
  }

  isAdmin(): boolean {
    return this.currentUser.role === "Admin";
  }

  onSubmit(): void {
    console.log("It is working! Bitch!");
  }

}
