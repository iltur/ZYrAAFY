import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NavbarComponentModule } from '@navbar';
import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseMessagesServiceModule } from '@contactus';
import { FirebaseHeroServiceModule } from '@hero';
import { ButtonComponentModule } from '@navigation';

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
    ButtonComponentModule,
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
