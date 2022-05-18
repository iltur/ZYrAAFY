import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseOpinionsService } from './firebase-opinions.service';
import { GETS_ALL_OPINIONS_DTO } from '../../../application/ports/secondary/dto/gets-all-opinions.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseOpinionsService, { provide: GETS_ALL_OPINIONS_DTO, useExisting: FirebaseOpinionsService }],
  	exports: [] })
export class FirebaseOpinionsServiceModule {
}
