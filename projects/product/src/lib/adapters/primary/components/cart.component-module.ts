import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart.component';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [CartComponent],
  	providers: [],
  	exports: [CartComponent] })
export class CartComponentModule {
}
