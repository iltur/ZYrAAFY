import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseTopsellersService } from './firebase-topsellers.service';
import { GETS_ALL_TOPSELLERS_DTO } from '../../../application/ports/secondary/dto/gets-all-topsellers.dto-port';
import { GETS_ONE_TOPSELLERS_DTO } from '../../../application/ports/secondary/dto/gets-one-topsellers.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseTopsellersService, { provide: GETS_ALL_TOPSELLERS_DTO, useExisting: FirebaseTopsellersService }, { provide: GETS_ONE_TOPSELLERS_DTO, useExisting: FirebaseTopsellersService }],
  	exports: [] })
export class FirebaseTopsellersServiceModule {
}
