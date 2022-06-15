import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseProductServiceModule, TopSellersComponentModule } from '@product';
import { GobackComponentModule } from '@navigation';
import { SpecialOffersPage } from './special-offers.page';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SpecialOffersPage,
      }
    ]),
    TopSellersComponentModule,
    FirebaseProductServiceModule,
    GobackComponentModule
  ],
  declarations: [SpecialOffersPage],
  providers: [],
  exports: []
})
export class SpecialOffersPageModule {
}
