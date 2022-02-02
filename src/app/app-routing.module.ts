import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {FindACoachComponent} from "./find-a-coach/find-a-coach.component";
import {CoachProfileComponent} from "./coach-profile/coach-profile.component";
import {ErrorComponent} from "./error/error.component";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";
import {ApplyComponent} from "./apply/apply.component";
import {CoachDetailComponent} from "./coach-detail/coach-detail.component";
import {RequestASessionComponent} from "./request-a-session/request-a-session.component";
import {SessionsOverviewCoacheeComponent} from "./sessions-overview-coachee/sessions-overview-coachee.component";
import {SessionsOverviewCoachComponent} from "./sessions-overview-coach/sessions-overview-coach.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  {path: 'my-sessions', component: SessionsOverviewCoacheeComponent},
  { path: 'user/:id', component: ProfileComponent},
  { path: 'find-a-coach', component: FindACoachComponent},
  { path: 'coach/my-sessions', component: SessionsOverviewCoachComponent},
  { path: 'coach/:id', component: CoachProfileComponent},
  { path: 'coach-detail/:id', component: CoachDetailComponent},
  { path: 'coach-detail/session/:id', component: RequestASessionComponent},
  { path: 'error', component: ErrorComponent},
  { path: 'edit-profile', component: EditProfileComponent},
  { path: 'apply', component: ApplyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


