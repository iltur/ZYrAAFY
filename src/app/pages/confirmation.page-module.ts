import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GobackComponentModule } from '@navigation';
import { OrderConfirmationComponentModule } from '@billing';
import { ConfirmationPage } from './confirmation.page';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ConfirmationPage,
      }
    ]),
    GobackComponentModule,
    OrderConfirmationComponentModule
  ],
  declarations: [ConfirmationPage],
  providers: [],
  exports: []
})
export class ConfirmationPageModule {
}
