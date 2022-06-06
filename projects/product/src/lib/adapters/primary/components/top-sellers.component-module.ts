import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopSellersComponent } from './top-sellers.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TopSellersComponent],
  providers: [],
  exports: [TopSellersComponent],
})
export class TopSellersComponentModule {}
