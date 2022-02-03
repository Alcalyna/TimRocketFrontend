import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {KeycloakService} from "../keycloak/keycloak.service";
import {Observable} from "rxjs";
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
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
    if (this.keyCloakService.isLoggedIn() && id == null) {
      this.userService.getUserBy(this.keyCloakService.getUsername())
        .subscribe(
          user => {
            this.currentUser = user, this.userToDisplay = user
          });
    } else {
      if (this.keyCloakService.isLoggedIn() && id == JSON.parse(localStorage.getItem('loggedInUser')!).userId) {
        this.router.navigateByUrl('/profile');
      } else {
        this.getUser(id!);
      }
    }
  }
  isACoachee(): boolean {
    if (this.keyCloakService.isLoggedIn()) {
      return JSON.parse(localStorage.getItem('loggedInUser')!).role.toLowerCase() === 'coachee';
    }
    return false;
  }
  getUser(id: string) {
    console.log("60 The id is " + id);
    this.userService.getUser(id!)
      .subscribe(user => user == null ? this.router.navigateByUrl('') : this.userToDisplay = user
      );
  }
}
