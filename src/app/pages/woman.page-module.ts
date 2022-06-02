import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseOurteamServiceModule, OurteamComponentModule } from '@aboutus';
import { FirebaseProductServiceModule, WomanComponentModule } from '@product';
import { WomanPage } from './woman.page';

@NgModule({ imports: [CommonModule, OurteamComponentModule, FirebaseOurteamServiceModule, WomanComponentModule,
      RouterModule.forChild([
        {
          path: '',
          component: WomanPage,
        }
      ]), WomanComponentModule, FirebaseProductServiceModule],
  	declarations: [WomanPage],
  	providers: [],
  	exports: [] })
export class WomanPageModule {
}
