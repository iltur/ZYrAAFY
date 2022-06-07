import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({ imports: [CommonModule, RouterModule],
  	declarations: [ProductDetailComponent],
  	providers: [],
  	exports: [ProductDetailComponent] })
export class ProductDetailComponentModule {
}