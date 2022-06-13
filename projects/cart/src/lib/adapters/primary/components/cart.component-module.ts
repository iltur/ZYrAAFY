import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, ReactiveFormsModule, RouterModule,],
  	declarations: [CartComponent],
  	providers: [],
  	exports: [CartComponent] })
export class CartComponentModule {
}
