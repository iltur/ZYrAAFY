import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderConfirmationComponent } from './order-confirmation.component';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [OrderConfirmationComponent],
	providers: [],
	exports: [OrderConfirmationComponent]
})
export class OrderConfirmationComponentModule {
}
