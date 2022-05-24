import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactusComponent } from './contactus.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, RouterModule],
	declarations: [ContactusComponent],
	providers: [],
	exports: [ContactusComponent]
})
export class ContactusComponentModule {
}
