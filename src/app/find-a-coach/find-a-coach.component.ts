import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../service/user.service";
import {Coach} from "../../model/Coach";

@Component({
  selector: 'app-find-a-coach',
  templateUrl: './find-a-coach.component.html',
  styleUrls: ['./find-a-coach.component.css']
})
export class FindACoachComponent implements OnInit {

  coaches!: Coach[];
  searchTerm?: string;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {

    this.userService.getCoaches().subscribe(coaches => this.coaches = coaches);
    // var elems = document.querySelectorAll('.dropdown-trigger');
    // var instances = Dropdown.init(elems, {});
  }

  search(term: string) {
    this.searchTerm = term;
  }
}
