import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/User";
import {KeycloakService} from "../keycloak/keycloak.service";
import {Router} from "@angular/router";
import {mergeAll, mergeMap} from "rxjs";

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  currentUser!: User;

  constructor(private userService : UserService, private keyCloakService: KeycloakService, private router : Router) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('loggedInUser')!);
  }

  becomeACoach() {
    console.log("I PRESSED ON BECOME A COACH " +this.currentUser);
    const id = this.currentUser?.userId!;
    console.log("THe id is " + id);
    this.userService.editRoleToCoach()
      .pipe(mergeMap(() => this.keyCloakService.refreshToken()))
      .subscribe(res => {
        this.router.navigateByUrl(`coach/${id}`);
        window.location.href=(`coach/${id}`);
      });
    // this.router.navigate(['coach/:this.currentUser?.userId!'])
  }
}
