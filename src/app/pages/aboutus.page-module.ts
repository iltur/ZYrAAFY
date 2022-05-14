import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutusPage } from './aboutus.page';
import { OurteamComponentModule } from '@aboutus';
import { FirebaseOurteamServiceModule } from '@aboutus';

@NgModule({
  imports: [CommonModule, OurteamComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutusPage,
      }
    ]),
    FirebaseOurteamServiceModule,],
  declarations: [AboutusPage],
  providers: [],
  exports: []
})
export class AboutusPageModule {
}
