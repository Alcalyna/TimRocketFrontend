import {Component, OnInit} from '@angular/core';
import {MemberInformationDTO} from "../../model/MemberInformationDTO";
import {MemberInformationDTOService} from "../../service/member-information-dto.service";
import {MemberService} from "../../service/member.service";
import {Observable} from "rxjs";
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
