import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArticleCardComponent} from './article-card/article-card.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {RouterModule} from '@angular/router';
import {NavigationComponent} from './navigation/navigation.component';
import {FooterComponent} from './footer/footer.component';
import {MatRippleModule} from "@angular/material/core";


@NgModule({
  declarations: [
    ArticleCardComponent,
    NavigationComponent,
    FooterComponent
  ],
  exports: [
    ArticleCardComponent,
    NavigationComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        MatTooltipModule,
        RouterModule,
        MatRippleModule,
    ]
})
export class ComponentModule {
}
