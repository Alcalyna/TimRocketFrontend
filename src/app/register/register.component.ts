import {Component, OnInit} from '@angular/core';

import {MemberService} from "../../service/member.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Member} from "../../model/Member";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  createMemberForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.maxLength(25)]],
    lastName: ['', [Validators.required, Validators.maxLength(25)]],
    email: ['', [Validators.required, Validators.maxLength(50), Validators.email]],
    password: ['', Validators.required]
  })

  constructor(private memberService: MemberService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("entry onsubmit")
    const memberToCreate = this.createMemberForm.value as Member;
    this.memberService.createMember(memberToCreate)
      .subscribe(_ => console.log("success!"));
  }

  get firstname(): FormControl {
    return this.createMemberForm.get('firstname') as FormControl;
  }

  get lastname(): FormControl {
    return this.createMemberForm.get('lastname') as FormControl;
  }

  get email(): FormControl {
    return this.createMemberForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.createMemberForm.get('password') as FormControl;
  }

}
