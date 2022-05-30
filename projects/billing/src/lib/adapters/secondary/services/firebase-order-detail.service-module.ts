import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseOrderDetailService } from './firebase-order-detail.service';
import { ADDS_ORDER_DETAIL_DTO } from '../../../application/ports/secondary/dto/adds-order-detail.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseOrderDetailService,
    { provide: ADDS_ORDER_DETAIL_DTO, useExisting: FirebaseOrderDetailService },
  ],
  exports: [],
})
export class FirebaseOrderDetailServiceModule {}
