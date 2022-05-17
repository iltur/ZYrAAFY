import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopsellersComponent } from './topsellers.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TopsellersComponent],
  	providers: [],
  	exports: [TopsellersComponent] })
export class TopsellersComponentModule {
}
