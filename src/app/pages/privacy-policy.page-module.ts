import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GobackComponentModule } from '@navigation';
import { PrivacyPolicyComponentModule } from '@docs';
import { PrivacyPolicyPage } from './privacy-policy.page';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PrivacyPolicyPage,
      }
    ]),
    GobackComponentModule,
    PrivacyPolicyComponentModule
  ],
  declarations: [PrivacyPolicyPage],
  providers: [],
  exports: []
})
export class PrivacyPolicyPageModule {
}
