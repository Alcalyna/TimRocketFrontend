import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from "./layout/layout.module";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from "./home/home.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationInterceptor } from "./keycloak/AuthenticationInterceptor";
import { MatFormFieldModule } from "@angular/material/form-field";
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import { ApplyComponent } from './apply/apply.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EditProfileComponent,
    UploadFileComponent,
    ApplyComponent


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
    MatIconModule,
    MatCardModule,
    RouterModule


  ],
  providers: [  { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }],
  exports: [
    HomeComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
