import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurteamComponent } from './ourteam.component';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, RouterModule,],
  	declarations: [OurteamComponent],
  	providers: [],
  	exports: [OurteamComponent] })
export class OurteamComponentModule {
}
