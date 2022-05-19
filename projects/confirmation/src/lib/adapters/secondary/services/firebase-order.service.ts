import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddsOrderDtoPort } from '../../../application/ports/secondary/dto/adds-order.dto-port';
import { OrderDTO } from '../../../application/ports/secondary/dto/order.dto';

@Injectable()
export class FirebaseOrderService implements AddsOrderDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(order: Partial<OrderDTO>): Observable<void> {
    return from(this._client.collection('orders').add(order)).pipe(map(() => void 0));
  }
}
