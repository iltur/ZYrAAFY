import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopsellersdetalisPage } from './topsellersdetalis.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TopsellersdetalisPage,
        }
      ])],
  	declarations: [TopsellersdetalisPage],
  	providers: [],
  	exports: [] })
export class TopsellersdetalisPageModule {
}
