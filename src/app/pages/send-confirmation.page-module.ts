import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SendConfirmationComponentModule } from '@contactus';
import { SendConfirmationPage } from './send-confirmation.page';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SendConfirmationPage,
      }
    ]),
    SendConfirmationComponentModule
  ],
  declarations: [SendConfirmationPage],
  providers: [],
  exports: []
})
export class SendConfirmationPageModule {
}
