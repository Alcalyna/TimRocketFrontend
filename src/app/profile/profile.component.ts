import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {KeycloakService} from "../keycloak/keycloak.service";
import {Observable, tap} from "rxjs";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser!: User;
  loggedInUser! : boolean

  constructor(
    private keyCloakService: KeycloakService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.userService.getUserBy(this.keyCloakService.getUsername()).subscribe(user => this.currentUser = user);
    this.loggedInUser = this.keyCloakService.isLoggedIn();
    console.log(this.currentUser);
  }


}
