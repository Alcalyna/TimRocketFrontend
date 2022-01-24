import {Component, OnInit} from '@angular/core';
import {Member} from "../../model/Member";
import {KeycloakService} from "../keycloak/keycloak.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentMember! : Member;
  member! : Member

  constructor(private keycloackService : KeycloakService) {}

  ngOnInit(): void {
    this.keycloackService.currentMember.subscribe(member => this.currentMember = member);
  }

}
