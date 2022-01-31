import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Coach} from "../../model/Coach";
import {Topic} from "../../model/Topic";
import {Experience} from "../../model/Experience";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-find-a-coach',
  templateUrl: './find-a-coach.component.html',
  styleUrls: ['./find-a-coach.component.css']
})
export class FindACoachComponent implements OnInit {

  coaches!: Observable<Coach[]>;
  topics!: Topic[];
  selected: string[] = [];
  experiencesList = ["JUNIOR", "MEDIOR", "SENIOR"];
  searchTerm?: string;
  selectedOption?: string;
  result?: string;
  selectedExperience: string[] = [];


  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {

    this.coaches = this.userService.getCoaches();
    this.userService.getTopics().subscribe(topics => this.topics = topics)
  }

  getInputValue(term: string) {
    this.searchTerm = term;
  }

  onChange(value:any){
    this.result = value;
  }




}
