import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Coach} from "../../model/Coach";
import {Topic} from "../../model/Topic";

@Component({
  selector: 'app-find-a-coach',
  templateUrl: './find-a-coach.component.html',
  styleUrls: ['./find-a-coach.component.css']
})
export class FindACoachComponent implements OnInit {

  coaches!: Coach[];
  topics!: Topic[];
  searchTerm?: string;
  selectedOption?: string;
  result?: string;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {

    this.userService.getCoaches().subscribe(coaches => this.coaches = coaches);
    this.userService.getTopics().subscribe(topics => this.topics = topics)
  }

  getInputValue(term: string) {
    this.searchTerm = term;
  }

  onChange2(value:any){
    console.log(value);
  }
}
