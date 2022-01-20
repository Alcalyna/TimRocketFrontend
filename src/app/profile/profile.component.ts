import {Component, OnInit} from '@angular/core';
import {MemberInformationDTO} from "../../model/MemberInformationDTO";
import {MemberInformationDTOService} from "../../service/member-information-dto.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentMember : MemberInformationDTO[] = [];

  constructor(private memberInformationDtoService: MemberInformationDTOService) {}

  ngOnInit(): void {
    this.getMember()
  }

  getMember(): void {
    this.memberInformationDtoService.getMembers().subscribe(member => this.currentMember = member);
  }

}
