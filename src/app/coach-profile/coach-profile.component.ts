import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Coach} from "../../model/Coach";
import {KeycloakService} from "../keycloak/keycloak.service";

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.css']
})
export class CoachProfileComponent implements OnInit {

  coach: Coach | undefined
  currentUser!: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private keycloackService: KeycloakService
  ) {}

  ngOnInit(): void {
    this.getUser()
    this.userService.getUserBy(this.keycloackService.getUsername()).subscribe(user => this.currentUser = user);

  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getCoach(id!)
      .subscribe(coach => this.coach = coach);
  }

  navigate(): any {
    this.router.navigate(['coach/my-sessions'])
  }

}
