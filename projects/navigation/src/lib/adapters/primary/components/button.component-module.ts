import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [ButtonComponent],
	providers: [],
	exports: [ButtonComponent]
})
export class ButtonComponentModule {
}
