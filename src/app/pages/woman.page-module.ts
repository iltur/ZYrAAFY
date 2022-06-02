import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WomanPage } from './woman.page';
import { FirebaseOurteamServiceModule, OurteamComponentModule } from '@aboutus';

@NgModule({ imports: [CommonModule, OurteamComponentModule, FirebaseOurteamServiceModule,
      RouterModule.forChild([
        {
          path: '',
          component: WomanPage,
        }
      ])],
  	declarations: [WomanPage],
  	providers: [],
  	exports: [] })
export class WomanPageModule {
}
