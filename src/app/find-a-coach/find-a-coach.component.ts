import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
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

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {

    this.userService.getCoaches().subscribe(coaches => this.coaches = coaches);
    this.userService.getTopics().subscribe(topics => this.topics = topics)
    // var elems = document.querySelectorAll('.dropdown-trigger');
    // var instances = Dropdown.init(elems, {});
  }

  search(term: string) {
    this.searchTerm = term;
  }
}
