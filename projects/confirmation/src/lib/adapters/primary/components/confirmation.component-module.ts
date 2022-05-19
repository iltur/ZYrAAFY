import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './confirmation.component';

@NgModule({ imports: [CommonModule],
  	declarations: [ConfirmationComponent],
  	providers: [],
  	exports: [ConfirmationComponent] })
export class ConfirmationComponentModule {
}
