import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ManPage } from './man.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ManPage,
        }
      ])],
  	declarations: [ManPage],
  	providers: [],
  	exports: [] })
export class ManPageModule {
}
