import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from "../../model/User";
import {KeycloakService} from "../keycloak/keycloak.service";
import {UserService} from "../../service/user.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfileUpdate} from "../../model/ProfileUpdate";
import {Router} from "@angular/router";
import {mergeMap} from "rxjs";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  @ViewChild("fileUpload", {static: false}) fileUpload!: ElementRef;
  files = [];
  fileName!: string;


  currentUser!: User;
  loggedInUser!: boolean;
  editForm!: FormGroup;
  ctlFirstName!: FormControl;
  ctlLastName!: FormControl;
  ctlEmail!: FormControl;
  ctlRole!: FormControl;


  constructor(
    private formBuilder: FormBuilder,
    private keyCloakService: KeycloakService,
    private userService: UserService,
    private router: Router
  ) {

    this.ctlFirstName = this.formBuilder.control("", [Validators.maxLength(25), Validators.minLength(2)]);
    this.ctlLastName = this.formBuilder.control("", [Validators.maxLength(25), Validators.minLength(2)]);
    this.ctlEmail = this.formBuilder.control("", [Validators.email, Validators.maxLength(50)]);
    this.ctlRole = this.formBuilder.control("", []);

    this.editForm = this.formBuilder.group({
      firstName: this.ctlFirstName,
      lastName: this.ctlLastName,
      email: this.ctlEmail,
      role: this.ctlRole
    });

    this.editForm.patchValue(
      this.getCurrentUser());
  }

  ngOnInit(): void {
    this.userService.getUserBy(this.keyCloakService.getUsername()).subscribe(user => {
      this.currentUser = user;
      this.editForm.patchValue({
        firstName: this.currentUser.firstName,
        lastName: this.currentUser.lastName,
        email: this.currentUser.email,
        role: this.currentUser.role
      });

    });

  }

  isAdmin(): boolean | undefined {
    return this.currentUser?.role === "Admin";
  }

  onSubmit(): void {
    const id = this.currentUser?.userId!;
    const currentRole = this.currentUser?.role;
    console.log("The current role is " + currentRole);
    console.log(this.editForm.value);
    let changedUser: ProfileUpdate = {
      firstName: this.editForm.value.firstName,
      lastName: this.editForm.value.lastName,
      email: this.editForm.value.email,
      role: this.editForm.value.role
    }
    console.log("The new role is " + changedUser.role);
    if (currentRole.toLowerCase() === "admin" && changedUser.role.toLowerCase() === "coach") {
      console.log("I am currently a " + currentRole + " and I'd like to become a coach.");
      this.userService.editProfile(this.currentUser?.userId!, changedUser).pipe(mergeMap(() => this.keyCloakService.refreshToken()))
        .subscribe(res => {
          this.router.navigateByUrl(`coach/${id}`);
          window.location.href = (`coach/${id}`);
        });
    } else if (currentRole.toLowerCase() === "admin" && changedUser.role.toLowerCase() === "coachee") {
      console.log("I am currently a " + currentRole + " and I'd like to become a coachee.");
      this.userService.editProfile(this.currentUser?.userId!, changedUser).pipe(mergeMap(() => this.keyCloakService.refreshToken()))
        .subscribe(res => {
          this.router.navigateByUrl(`profile`);
        });
    } else {
      console.log("I am currently a " + currentRole + " and I don't want to change my role.");
      this.userService.editProfile(this.currentUser?.userId!, changedUser).subscribe(res => {
        this.router.navigate(['profile']);
      });
    }
  }

  getCurrentUser(): User {
    return this.currentUser = JSON.parse(localStorage.getItem('loggedInUser')!);
  }
}
