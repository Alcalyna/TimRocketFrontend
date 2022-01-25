import { Component, OnInit } from '@angular/core';
import {Member} from "../../../model/Member";
import {KeycloakService} from "../../keycloak/keycloak.service";
import {async, Observable, tap} from "rxjs";
import {MemberService} from "../../../service/member.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //loggedInUser : Member | undefined;
//   currentUser$! : Observable<Member>;
//
//   constructor(
//     private keyCloakService: KeycloakService,
//     private memberService: MemberService
//   ) { }
//
//   ngOnInit(): void {
//    // this.keyCloakService.currentMember.subscribe(member => this.loggedInUser = member);
//    //  this.currentUser$ = this.keyCloakService.currentMember.pipe(tap (user => console.log(" user logged in? " + user))) ;
//    //  console.log(this.currentUser$)
//
//     // this.memberService.getMemberBy(this.keyCloakService.getUsername()).subscribe(user => this.currentUser$ = user);
//     this.currentUser$ = this.memberService.getMemberBy(this.keyCloakService.getUsername());
//   }
//
//
//
//   clickLogin() {
//
//   }
//
//
// }
  currentUser!: Member;
  name: String = "abc";

  constructor(
    private keyCloakService: KeycloakService,
    private memberService: MemberService
  ) {
  }

  ngOnInit(): void {
    // this.keyCloakService.currentMember.subscribe(member => this.loggedInUser = member);

    // this.keyCloakService.currentMember.pipe(tap(() => console.log("debug")
    // )).subscribe(user => this.currentUser = user);
    // console.log(this.currentUser);
    // console.log(this.keyCloakService);



    this.memberService.getMemberBy(this.keyCloakService.getUsername()).subscribe(user => this.currentUser = user);
  }
  clickLogin() {

  }

}
