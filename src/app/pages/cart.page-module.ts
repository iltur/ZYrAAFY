import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartComponentModule, FirebaseCartServiceModule } from '@product';
import { CartPage } from './cart.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CartPage,
      },
    ]),
    CartComponentModule,
    FirebaseCartServiceModule,
  ],
  declarations: [CartPage],
  providers: [],
  exports: [],
})
export class CartPageModule {}
