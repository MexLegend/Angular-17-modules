import { NgModule } from '@angular/core';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewCardComponent } from './review-card/review-card.component';


@NgModule({
  declarations: [
    ReviewsComponent,
    ReviewCardComponent
  ],
  exports: [
    ReviewsComponent
  ]
})
export class ReviewsModule { }
