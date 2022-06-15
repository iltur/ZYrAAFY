import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DeliveryPage } from './delivery.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: DeliveryPage,
        }
      ])],
  	declarations: [DeliveryPage],
  	providers: [],
  	exports: [] })
export class DeliveryPageModule {
}
