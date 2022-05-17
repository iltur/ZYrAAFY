import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactusComponentModule, FirebaseMessagesServiceModule } from '@contactus';
import { GobackComponentModule } from '@goback';
import { ContactusPage } from './contactus.page';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  imports: [CommonModule, ContactusComponentModule,
    AngularFireModule,
    FirebaseMessagesServiceModule,
    ContactusComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactusPage,
      }
    ]), GobackComponentModule],
  declarations: [ContactusPage],
  providers: [],
  exports: []
})
export class ContactusPageModule {
}
