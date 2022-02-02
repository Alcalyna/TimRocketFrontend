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
  userToDisplayId!: string | null;

  constructor(
    private keyCloakService: KeycloakService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("33 " + id);
    if (this.keyCloakService.isLoggedIn() && id == null) {
      this.userService.getUserBy(this.keyCloakService.getUsername())
        .subscribe(
          user => {
            this.currentUser = user, this.userToDisplay = user
          });
    } else {
      this.userToDisplayId = id;
      console.log("42 " + id);
    }
    this.getUser(this.userToDisplayId!);
    if (this.keyCloakService.isLoggedIn() && id == JSON.parse(localStorage.getItem('loggedInUser')!).userId) {
      console.log("46 " + id);
      this.router.navigateByUrl('/profile');
    }
  }

  isACoachee(): boolean {
    if (this.keyCloakService.isLoggedIn()) {
      // console.log("The role is " + JSON.parse(localStorage.getItem('loggedInUser')!).role.toLowerCase());
      return JSON.parse(localStorage.getItem('loggedInUser')!).role.toLowerCase() === 'coachee';
    }
    return false;
  }

  getUser(id: string) {
    console.log("60 The id is " + id);
    this.userService.getUser(id!)
      .subscribe(user => user == null && !(this.keyCloakService.isLoggedIn() && id == JSON.parse(localStorage.getItem('loggedInUser')!).userId) ? console.log("62") : this.userToDisplay = user
      );
  }

  //this.router.navigateByUrl('')

}
