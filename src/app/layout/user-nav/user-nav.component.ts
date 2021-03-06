import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/User";
import {UserService} from "../../../service/user.service";
import {KeycloakService} from "../../keycloak/keycloak.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {

  currentUser!: User


  constructor(private userService: UserService,
              private keycloackService: KeycloakService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getUserBy(this.keycloackService.getUsername()).subscribe(user => this.currentUser = user);
  }

  hasRoute(route: string): boolean{
    return this.router.url.includes(route);
  }

}
