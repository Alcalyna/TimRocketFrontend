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

  //loggedInUser : Member | undefined;
  currentUser$! : Observable<Member>

  constructor(
    private keyCloakService: KeycloakService
  ) { }

  ngOnInit(): void {
   // this.keyCloakService.currentMember.subscribe(member => this.loggedInUser = member);
    this.currentUser$ = this.keyCloakService.currentMember.pipe(tap (user => console.log(" user logged in? " + user))) ;
    console.log(this.currentUser$)
  }



  clickLogin() {

  }


}
