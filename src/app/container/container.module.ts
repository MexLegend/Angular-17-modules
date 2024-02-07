import { NgModule } from '@angular/core';
import { ContainerComponent } from './container/container.component';
import { HeaderModule } from '../header/header.module';
import { HeroModule } from './hero/hero.module';
import { BestSellingModule } from './best-selling/best-selling.module';
import { ReviewsModule } from './reviews/reviews.module';
import { FooterModule } from '../footer/footer.module';
import { ProductTypesModule } from './product-types/product-types.module';



@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    HeaderModule,
    HeroModule,
    ProductTypesModule,
    BestSellingModule,
    ReviewsModule,
    FooterModule
  ],
  exports: [
    ContainerComponent
  ]
})
export class ContainerModule { }
