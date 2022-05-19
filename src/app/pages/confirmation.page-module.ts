import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GobackComponentModule } from '@navigation';
import { ConfirmationComponentModule } from '@confirmation';
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
    ConfirmationComponentModule
  ],
  declarations: [ConfirmationPage],
  providers: [],
  exports: []
})
export class ConfirmationPageModule {
}
