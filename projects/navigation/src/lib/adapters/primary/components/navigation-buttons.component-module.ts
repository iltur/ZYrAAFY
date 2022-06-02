import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationButtonsComponent } from './navigation-buttons.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavigationButtonsComponent],
  providers: [],
  exports: [NavigationButtonsComponent],
})
export class NavigationButtonsComponentModule {}
