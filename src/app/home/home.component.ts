import { Component, OnInit } from '@angular/core';
import {Member} from "../../model/Member";
import {KeycloakService} from "../keycloak/keycloak.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedInUser!: Member;

  constructor(private keyCloakService: KeycloakService) { }

  ngOnInit(): void {
    this.keyCloakService.currentMember
      .subscribe(member => this.loggedInUser = member);
  }

}
