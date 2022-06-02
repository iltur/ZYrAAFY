import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseProductServiceModule, ManComponentModule } from '@product';
import { ManPage } from './man.page';

@NgModule({ imports: [CommonModule, ManComponentModule,
      RouterModule.forChild([
        {
          path: '',
          component: ManPage,
        }
      ]), ManComponentModule, FirebaseProductServiceModule],
  	declarations: [ManPage],
  	providers: [],
  	exports: [] })
export class ManPageModule {
}
