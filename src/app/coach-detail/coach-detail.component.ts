import { Component, OnInit } from '@angular/core';
import {Coach} from "../../model/Coach";
import {UserService} from "../../service/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css']
})
export class CoachDetailComponent implements OnInit {

  coach: Coach | undefined

  constructor(private userService: UserService,
              private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUser()
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getCoach(id!)
      .subscribe(coach => this.coach = coach);
  }

}
