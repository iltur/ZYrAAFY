import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseOrderService } from './firebase-order.service';
import { ADDS_ORDER_DTO } from '../../../application/ports/secondary/dto/adds-order.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseOrderService, { provide: ADDS_ORDER_DTO, useExisting: FirebaseOrderService }],
  	exports: [] })
export class FirebaseOrderServiceModule {
}
