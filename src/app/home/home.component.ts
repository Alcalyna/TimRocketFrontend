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

  member$!: Observable<Member>;

  constructor(private keyCloakService: KeycloakService) { }

  ngOnInit(): void {
    this.member$ = this.keyCloakService.currentMember;
  }

}
