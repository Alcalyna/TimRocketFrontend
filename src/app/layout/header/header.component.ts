import { Component, OnInit } from '@angular/core';
import {Member} from "../../../model/Member";
import {KeycloakService} from "../../keycloak/keycloak.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedInUser!: Member;

  constructor(
    private keyCloakService: KeycloakService
  ) { }

  ngOnInit(): void {
    this.keyCloakService
  }


}
