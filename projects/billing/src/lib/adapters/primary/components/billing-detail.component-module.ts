import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingDetailComponent } from './billing-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule],
	declarations: [BillingDetailComponent],
	providers: [],
	exports: [BillingDetailComponent]
})
export class BillingDetailComponentModule {
}
