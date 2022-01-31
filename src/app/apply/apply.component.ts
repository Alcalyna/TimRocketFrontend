import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/User";
import {KeycloakService} from "../keycloak/keycloak.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  currentUser!: User;

  constructor(private userService : UserService, private keyCloakService: KeycloakService, private router : Router) { }

  ngOnInit(): void {
    this.userService.getUserBy(this.keyCloakService.getUsername()).subscribe(user => this.currentUser = user);
  }

  becomeACoach() {
    /*this.userService.editRoleToCoach(this.currentUser?.userId!).subscribe(res => {
         this.router.navigate(['coach/:{this.currentUser?.userId!}'])
    });*/
    this.router.navigate(['coach/:this.currentUser?.userId!'])
  }
}
