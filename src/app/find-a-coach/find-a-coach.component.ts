import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-find-a-coach',
  templateUrl: './find-a-coach.component.html',
  styleUrls: ['./find-a-coach.component.css']
})
export class FindACoachComponent implements OnInit {

  users!: User[];

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(users => this.users = users);
    // var elems = document.querySelectorAll('.dropdown-trigger');
    // var instances = Dropdown.init(elems, {});
  }
}
