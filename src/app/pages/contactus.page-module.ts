import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactusPage } from './contactus.page';
import { ContactusComponentModule } from '@contactus';

@NgModule({
  imports: [CommonModule, ContactusComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactusPage,
      }
    ])],
  declarations: [ContactusPage],
  providers: [],
  exports: []
})
export class ContactusPageModule {
}
