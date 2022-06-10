import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FirebaseProductServiceModule,
  InMemoryProductStorageModule,
  ProductDetailComponentModule,
  ProductResolver,
  ProductResolverModule,
} from '@product';
import { GobackComponentModule } from '@navigation';
import { ProductdetailPage } from './productdetail.page';
import { FirebaseCartServiceModule } from '@cart';

@NgModule({
  imports: [
    CommonModule,
    ProductDetailComponentModule,
    FirebaseProductServiceModule,
    InMemoryProductStorageModule,
    ProductResolverModule,
    FirebaseCartServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductdetailPage,
        resolve: [ProductResolver],
      },
    ]),
    GobackComponentModule,
  ],
  declarations: [ProductdetailPage],
  providers: [],
  exports: [],
})
export class ProductdetailPageModule {}
