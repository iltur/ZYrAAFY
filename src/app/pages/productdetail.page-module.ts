import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseProductServiceModule, InMemoryProductStorageModule, ProductDetailComponentModule, ProductResolver, ProductResolverModule } from '@product';
import { GobackComponentModule } from '@goback';
import { ProductdetailPage } from './productdetail.page';

@NgModule({
  imports: [CommonModule, ProductDetailComponentModule, FirebaseProductServiceModule, InMemoryProductStorageModule, ProductResolverModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductdetailPage,
        resolve: [ProductResolver]
      }
    ]), GobackComponentModule],
  declarations: [ProductdetailPage],
  providers: [],
  exports: []
})
export class ProductdetailPageModule {
}
