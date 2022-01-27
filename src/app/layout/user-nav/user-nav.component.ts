import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/User";
import {UserService} from "../../../service/user.service";
import {KeycloakService} from "../../keycloak/keycloak.service";

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {

  currentUser!: User

  constructor(private userService: UserService,
              private keycloackService: KeycloakService) { }

  ngOnInit(): void {
    this.userService.getUserBy(this.keycloackService.getUsername()).subscribe(user => this.currentUser = user);
  }

}
