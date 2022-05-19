import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationComponent } from './confirmation.component';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule],
	declarations: [ConfirmationComponent],
	providers: [],
	exports: [ConfirmationComponent]
})
export class ConfirmationComponentModule {
}
