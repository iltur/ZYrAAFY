import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BillingDetailComponentModule, FirebaseOrderDetailServiceModule } from '@billing';
import { TopsellersComponentModule } from '@top';
import { FirebaseProductServiceModule, TopSellersComponentModule } from '@product';
import { BillingDetailPage } from './billing-detail.page';

@NgModule({
  imports: [
    CommonModule,
    BillingDetailComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: BillingDetailPage,
      },
    ]),
    BillingDetailComponentModule,

    FirebaseOrderDetailServiceModule,
    TopsellersComponentModule,
    FirebaseProductServiceModule,
    TopSellersComponentModule
  ],
  declarations: [BillingDetailPage],
  providers: [],
  exports: [],
})
export class BillingDetailPageModule {}
