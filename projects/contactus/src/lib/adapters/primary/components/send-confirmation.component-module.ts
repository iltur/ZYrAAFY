import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendConfirmationComponent } from './send-confirmation.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [SendConfirmationComponent],
	providers: [],
	exports: [SendConfirmationComponent]
})
export class SendConfirmationComponentModule {
}
