import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductdetailPage } from './productdetail.page';
import { FirebaseProductServiceModule, InMemoryProductStorageModule, ProductDetailComponentModule, ProductResolver, ProductResolverModule } from '@product';

@NgModule({
  imports: [CommonModule, ProductDetailComponentModule, FirebaseProductServiceModule, InMemoryProductStorageModule, ProductResolverModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductdetailPage,
        resolve: [ProductResolver]
      }
    ])],
  declarations: [ProductdetailPage],
  providers: [],
  exports: []
})
export class ProductdetailPageModule {
}
