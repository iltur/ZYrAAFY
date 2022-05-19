import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopsellersComponent } from './topsellers.component';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, RouterModule],
  	declarations: [TopsellersComponent],
  	providers: [],
  	exports: [TopsellersComponent] })
export class TopsellersComponentModule {
}
