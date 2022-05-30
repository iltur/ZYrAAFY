import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddsOrderDetailDtoPort } from '../../../application/ports/secondary/dto/adds-order-detail.dto-port';
import { OrderDetailDTO } from '../../../application/ports/secondary/dto/order-detail.dto';

@Injectable()
export class FirebaseOrderDetailService implements AddsOrderDetailDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(orderDetail: Partial<OrderDetailDTO>): Observable<void> {
    return from(this._client.collection('order-details').add(orderDetail)).pipe(map(() => void 0));
  }
}
