import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GobackComponentModule } from '@navigation';
import { ConfirmationComponentModule, FirebaseOrderServiceModule } from '@confirmation';
import { ConfirmationPage } from './confirmation.page';

@NgModule({
  imports: [CommonModule, ConfirmationComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: ConfirmationPage,
      }
    ]),
    GobackComponentModule,
    ConfirmationComponentModule,
    FirebaseOrderServiceModule
  ],
  declarations: [ConfirmationPage],
  providers: [],
  exports: []
})
export class ConfirmationPageModule {
}
