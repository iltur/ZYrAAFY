import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactusComponent } from './contactus.component';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule],
	declarations: [ContactusComponent],
	providers: [],
	exports: [ContactusComponent]
})
export class ContactusComponentModule {
}
