import { NgModule } from '@angular/core';
import { ProductTypesComponent } from './product-types/product-types.component';


@NgModule({
  declarations: [
    ProductTypesComponent
  ],
  exports: [
    ProductTypesComponent
  ]
})
export class ProductTypesModule { }
