import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductslistComponent } from './products-list.component';
import { ProductDepartmentComponent } from './product-department.component';
import { ProductimageComponent } from './product-image.component';
import { ProductpriceComponent } from './product-price.component';
import { ProductRowComponent } from './product-row.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductslistComponent,
    ProductDepartmentComponent,
    ProductimageComponent,
    ProductpriceComponent,
    ProductRowComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }