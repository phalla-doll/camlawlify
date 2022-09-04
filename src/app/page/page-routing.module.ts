import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {AboutUsPageComponent} from "./about-us-page/about-us-page.component";
import {LawPageComponent} from "./law-page/law-page.component";
import {RequestLawPageComponent} from "./request-law-page/request-law-page.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'about-us',
    component: AboutUsPageComponent
  },
  {
    path: 'laws',
    component: LawPageComponent
  },
  {
    path: 'laws/:id',
    component: LawPageComponent
  },
  {
    path: 'request',
    component: RequestLawPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {
}
