import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import { UserNavComponent } from './user-nav/user-nav.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    UserNavComponent,


  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
