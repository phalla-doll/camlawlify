import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleCardComponent } from './article-card/article-card.component';


@NgModule({
    declarations: [
        ArticleCardComponent
    ],
    exports: [
        ArticleCardComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class ComponentModule { }
