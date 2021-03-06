import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from "./home/home.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthenticationInterceptor} from "./keycloak/AuthenticationInterceptor";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CoachProfileComponent} from './coach-profile/coach-profile.component';
import {FindACoachComponent} from './find-a-coach/find-a-coach.component';
import {FilterPipe} from "./pipes/filter.pipe";
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import {SearchPipe} from './pipes/search.pipe';
import {ErrorComponent} from './error/error.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {UploadFileComponent} from './upload-file/upload-file.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {ApplyComponent} from './apply/apply.component';
import {RouterModule} from "@angular/router";
import {CoachDetailComponent} from './coach-detail/coach-detail.component';
import {FilterByExperiencePipe} from './pipes/filter-by-experience.pipe';
import { RequestASessionComponent } from './request-a-session/request-a-session.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {DatePipe} from "@angular/common";
import { FilterCurrentUserPipe } from './pipes/filter-current-user.pipe';
import {MatInputModule} from "@angular/material/input";
import { SessionsOverviewCoacheeComponent } from './sessions-overview-coachee/sessions-overview-coachee.component';
import { FilterSessionsWithCoacheeIdPipe } from './pipes/sessions/filter-sessions-with-coachee-id.pipe';
import { SessionsOverviewCoachComponent } from './sessions-overview-coach/sessions-overview-coach.component';
import { FilterSessionsWithCoachIdPipe } from './pipes/sessions/filter-sessions-with-coach-id.pipe';


@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      RegisterComponent,
      ProfileComponent,
      FindACoachComponent,
      FilterPipe,
      SearchPipe,
      CoachProfileComponent,
      ErrorComponent,
      EditProfileComponent,
      UploadFileComponent,
      ApplyComponent,
      CoachDetailComponent,
      FilterByExperiencePipe,
      FilterByExperiencePipe,
      RequestASessionComponent,
      SessionsOverviewCoacheeComponent,
      FilterSessionsWithCoacheeIdPipe,
      FilterCurrentUserPipe,
      SessionsOverviewCoachComponent,
      FilterSessionsWithCoachIdPipe,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule

  ],
  providers: [  { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }],
    exports: [
        HomeComponent,
        FilterPipe,

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
