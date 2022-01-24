import {Component, OnInit} from '@angular/core';
import {Member} from "../../model/Member";
import {KeycloakService} from "../keycloak/keycloak.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // @ts-ignore
  currentUser$! : Observable<Member>

  constructor(
    private keyCloakService: KeycloakService
  ) { }

  ngOnInit(): void {
    // this.keyCloakService.currentMember.subscribe(member => this.loggedInUser = member);
    this.currentUser$ = this.keyCloakService.currentMember.pipe(tap (user => console.log(" user logged in? " + user))) ;
    console.log(this.currentUser$)
  }


}
