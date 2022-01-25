import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/User";
import {KeycloakService} from "../../keycloak/keycloak.service";
import {async, Observable, tap} from "rxjs";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser!: User;

  constructor(
    private keyCloakService: KeycloakService
  ) {
  }

  ngOnInit(): void {
  }

  isLoggedIn(){
    return this.keyCloakService.isLoggedIn();
  }

  logout(){
    this.keyCloakService.logout();
  }
}
