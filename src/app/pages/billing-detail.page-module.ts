import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BillingDetailComponentModule, FirebaseOrderServiceModule } from '@billing';
import { BillingDetailPage } from './billing-detail.page';

@NgModule({
  imports: [CommonModule, BillingDetailComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: BillingDetailPage,
      }
    ]),
    BillingDetailComponentModule,
    FirebaseOrderServiceModule
  ],
  declarations: [BillingDetailPage],
  providers: [],
  exports: []
})
export class BillingDetailPageModule {
}
