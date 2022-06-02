import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomanComponent } from './woman.component';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, RouterModule],
  	declarations: [WomanComponent],
  	providers: [],
  	exports: [WomanComponent] })
export class WomanComponentModule {
}
