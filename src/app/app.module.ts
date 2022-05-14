import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseAppModule, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore, FirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavbarComponentModule } from '@navbar';
import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseMessagesServiceModule } from '@contactus';
import { FirebaseHeroServiceModule } from '@hero';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FirebaseMessagesServiceModule,
    AppRoutingModule,
    NavbarComponentModule,
    FirestoreModule,
    FirebaseHeroServiceModule,
    AngularFireModule.initializeApp(environment.firebase),
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    BrowserAnimationsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
