import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpinionsComponent } from './opinions.component';

@NgModule({ imports: [CommonModule],
  	declarations: [OpinionsComponent],
  	providers: [],
  	exports: [OpinionsComponent] })
export class OpinionsComponentModule {
}
