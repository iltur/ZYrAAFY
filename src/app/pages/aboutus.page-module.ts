import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseOurteamServiceModule, OurteamComponentModule } from '@aboutus';
import { GobackComponentModule } from '@navigation';
import { AboutusPage } from './aboutus.page';

@NgModule({
  imports: [CommonModule, OurteamComponentModule, GobackComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutusPage,
      }
    ]),
    FirebaseOurteamServiceModule, GobackComponentModule, OurteamComponentModule,],
  declarations: [AboutusPage],
  providers: [],
  exports: []
})
export class AboutusPageModule {
}
