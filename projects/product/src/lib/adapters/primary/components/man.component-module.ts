import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManComponent } from './man.component';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, RouterModule],
  	declarations: [ManComponent],
  	providers: [],
  	exports: [ManComponent] })
export class ManComponentModule {
}
