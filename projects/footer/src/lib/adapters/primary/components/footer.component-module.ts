import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [FooterComponent],
	providers: [],
	exports: [FooterComponent]
})
export class FooterComponentModule {
}
