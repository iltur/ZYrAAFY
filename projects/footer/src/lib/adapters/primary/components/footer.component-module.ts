import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer.component';

@NgModule({
	imports: [CommonModule, RouterModule, ReactiveFormsModule],
	declarations: [FooterComponent],
	providers: [],
	exports: [FooterComponent]
})
export class FooterComponentModule {
}
