import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Coach} from "../../model/Coach";
import {Topic} from "../../model/Topic";
import {Observable} from "rxjs";
import {User} from "../../model/User";
import {KeycloakService} from "../keycloak/keycloak.service";


@Component({
  selector: 'app-find-a-coach',
  templateUrl: './find-a-coach.component.html',
  styleUrls: ['./find-a-coach.component.css']
})
export class FindACoachComponent implements OnInit {

  loggedInUser!: User;
  coaches!: Observable<Coach[]>;
  topics!: Topic[];
  selected: string[] = [];
  experiencesList = ["JUNIOR", "MEDIOR", "SENIOR"];
  searchTerm?: string;
  selectedOption?: string;
  result?: string;
  selectedExperience: string[] = [];

  constructor(
    private userService: UserService,
    private keyCloakService: KeycloakService
  ) {
  }

  ngOnInit(): void {
    this.coaches = this.userService.getCoaches();
    this.userService.getTopics().subscribe(topics => this.topics = topics);
    this.userService
      .getUserBy(this.keyCloakService.getUsername())
      .subscribe(user => this.loggedInUser = user)
  }

  getInputValue(term: string) {
    this.searchTerm = term;
  }

  onChange(value:any){
    this.result = value;
  }
}
