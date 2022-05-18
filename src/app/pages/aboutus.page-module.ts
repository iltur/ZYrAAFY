import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseOurteamServiceModule, OurteamComponentModule } from '@aboutus';
import { GobackComponentModule } from '@navigation';
import { OpinionsComponentModule } from '@opinions';
import { FirebaseOpinionsServiceModule } from '@opinions';
import { AboutusPage } from './aboutus.page';

@NgModule({
  imports: [CommonModule, OurteamComponentModule, GobackComponentModule, OpinionsComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutusPage,
      }
    ]),
    FirebaseOurteamServiceModule, FirebaseOpinionsServiceModule, GobackComponentModule, OurteamComponentModule, OpinionsComponentModule],
  declarations: [AboutusPage],
  providers: [],
  exports: []
})
export class AboutusPageModule {
}
