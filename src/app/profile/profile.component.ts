import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {KeycloakService} from "../keycloak/keycloak.service";
import {mergeMap, Observable, tap} from "rxjs";
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Coach} from "../../model/Coach";
import {type} from "jquery";
import {serialize} from "@angular/compiler/src/i18n/serializers/xml_helper";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

})
export class ProfileComponent implements OnInit {

  currentUser!: User;
  userToDisplay!: User;
  loggedInUser!: boolean
  user!: Observable<User>;

  constructor(
    private keyCloakService: KeycloakService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (this.keyCloakService.isLoggedIn()) {
      this.userService.getUserBy(this.keyCloakService.getUsername()).subscribe(
        user => {
          this.currentUser = user, this.userToDisplay = user
        }
      );
    }
    this.getUser(id!);

  }

  isACoachee(): boolean {
    return this.userToDisplay.role.toLowerCase() === 'coachee';
  }

  getUser(id: string) {
    console.log("The id is " + id);
    this.userService.getUser(id!)
      .subscribe(user => this.userToDisplay = user
      );
  }

}
