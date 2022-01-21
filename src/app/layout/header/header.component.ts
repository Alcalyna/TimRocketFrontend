import { Component, OnInit } from '@angular/core';

import {Member} from "../../../model/Member";
import {KeycloakService} from "../../keycloak/keycloak.service";
import {async, Observable, tap} from "rxjs";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedInUser!: Member;

  currentUser$! : Observable<Member>


  constructor(
    private keyCloakService: KeycloakService
  ) { }

  ngOnInit(): void {


    this.currentUser$ = this.keyCloakService.currentMember.pipe(tap (user => console.log(" user logged in? " + user))) ;
  }



  clickLogin() {

  }


}
