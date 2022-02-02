import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Coach} from "../../model/Coach";

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.css']
})
export class CoachProfileComponent implements OnInit {

  coach: Coach | undefined

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.getUser()
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
