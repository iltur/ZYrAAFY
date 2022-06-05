import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseMessagesServiceModule } from '@contactus';
import { FirebaseHeroServiceModule } from '@hero';
import { NavigationButtonsComponentModule } from '@navigation';
import { InMemoryProductStorageModule } from '@product';
import { InMemoryTopsellerStorageModule } from 'projects/top/src/lib/adapters/secondary/storages/in-memory-topseller.storage-module';
import { FooterComponentModule } from '@footer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    FirebaseMessagesServiceModule,
    AppRoutingModule,

    FirestoreModule,
    FirebaseHeroServiceModule,
    AngularFireModule.initializeApp(environment.firebase),
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    BrowserAnimationsModule,
    InMemoryProductStorageModule,
    InMemoryTopsellerStorageModule,
    NavigationButtonsComponentModule,
    FooterComponentModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
