import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllCartDtoPort } from '../../../application/ports/secondary/dto/gets-all-cart.dto-port';
import { RemovesCartDtoPort } from '../../../application/ports/secondary/dto/removes-cart.dto-port';
import { AddsCartDtoPort } from '../../../application/ports/secondary/dto/adds-cart.dto-port';
import { CartDTO } from '../../../application/ports/secondary/dto/cart.dto';

@Injectable()
export class FirebaseCartService
  implements GetsAllCartDtoPort, RemovesCartDtoPort, AddsCartDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAll(): Observable<CartDTO[]> {
    return this._client
      .collection<CartDTO>('carts')
      .valueChanges({ idField: 'id' });
  }

  remove(id: string): Observable<void> {
    return from(this._client.doc('carts/' + id).delete()).pipe(
      map(() => void 0)
    );
  }

  add(cart: Partial<CartDTO>): Observable<void> {
    return from(this._client.collection('carts').add(cart)).pipe(map(() => void 0));
  }
}
