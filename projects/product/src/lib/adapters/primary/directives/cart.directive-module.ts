import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartDirective } from './cart.directive';

@NgModule({ imports: [CommonModule],
  	declarations: [CartDirective],
  	providers: [],
  	exports: [CartDirective] })
export class CartDirectiveModule {
}
