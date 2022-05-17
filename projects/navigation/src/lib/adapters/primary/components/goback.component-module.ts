import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GobackComponent } from './goback.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [GobackComponent],
	providers: [],
	exports: [GobackComponent]
})
export class GobackComponentModule {
}
