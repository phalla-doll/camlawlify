import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ComponentModule} from "../component/component.module";


@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    MatButtonModule,
    MatIconModule,
    ComponentModule
  ]
})
export class PageModule { }
