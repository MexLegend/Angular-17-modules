import { NgModule } from '@angular/core';
import { BestSellingComponent } from './best-selling/best-selling.component';
import { BestSellingCardComponent } from './best-selling-card/best-selling-card.component';


@NgModule({
  declarations: [
    BestSellingComponent,
    BestSellingCardComponent
  ],
  exports: [
    BestSellingComponent
  ]
})
export class BestSellingModule { }
