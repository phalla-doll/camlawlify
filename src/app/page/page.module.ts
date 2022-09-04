import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ComponentModule} from "../component/component.module";
import { LoginPageComponent } from './login-page/login-page.component';
import { LawPageComponent } from './law-page/law-page.component';
import { RequestLawPageComponent } from './request-law-page/request-law-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import {MatRippleModule} from "@angular/material/core";


@NgModule({
  declarations: [
    LandingPageComponent,
    LoginPageComponent,
    LawPageComponent,
    RequestLawPageComponent,
    AboutUsPageComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    MatButtonModule,
    MatIconModule,
    ComponentModule,
    MatRippleModule
  ]
})
export class PageModule { }