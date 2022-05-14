import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfirmationPage } from './confirmation.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ConfirmationPage,
        }
      ])],
  	declarations: [ConfirmationPage],
  	providers: [],
  	exports: [] })
export class ConfirmationPageModule {
}
