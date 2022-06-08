import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BargainsComponent } from './bargains.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [BargainsComponent],
	providers: [],
	exports: [BargainsComponent]
})
export class BargainsComponentModule {
}
