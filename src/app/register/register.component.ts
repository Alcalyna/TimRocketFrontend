import {Component, OnInit} from '@angular/core';

import {MemberService} from "../../service/member.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Member} from "../../model/Member";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public error: any;

  createMemberForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.maxLength(25)]],
    lastName: ['', [Validators.required, Validators.maxLength(25)]],
    email: ['', [Validators.required, Validators.maxLength(50), Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(private memberService: MemberService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const memberToCreate = this.createMemberForm.value as Member;
    this.memberService.createMember(memberToCreate)
      .subscribe(success => {
          console.log("success");
        }
        ,
        error => {
          this.error = error;
        }
      );
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
