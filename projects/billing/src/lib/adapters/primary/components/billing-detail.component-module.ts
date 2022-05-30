import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BillingDetailComponent } from './billing-detail.component';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule],
	declarations: [BillingDetailComponent],
	providers: [],
	exports: [BillingDetailComponent]
})
export class BillingDetailComponentModule {
}
