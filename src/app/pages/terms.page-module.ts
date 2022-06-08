import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GobackComponentModule } from '@navigation';
import { TermsComponentModule } from '@docs';
import { TermsPage } from './terms.page';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TermsPage,
      }
    ]),
    GobackComponentModule,
    TermsComponentModule
  ],
  declarations: [TermsPage],
  providers: [],
  exports: []
})
export class TermsPageModule {
}
