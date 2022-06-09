import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllCartDtoPort } from '../../../application/ports/secondary/dto/gets-all-cart.dto-port';
import { RemovesCartDtoPort } from '../../../application/ports/secondary/dto/removes-cart.dto-port';
import { SetsCartDtoPort } from '../../../application/ports/secondary/dto/sets-cart.dto-port';
import { CartDTO } from '../../../application/ports/secondary/dto/cart.dto';

@Injectable()
export class FirebaseCartService implements GetsAllCartDtoPort, RemovesCartDtoPort, SetsCartDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(): Observable<CartDTO[]> {
    return this._client
      .collection<CartDTO>('carts')
      .valueChanges({ idField: 'id' });
  }

  remove(id: string): Observable<void> {
    return from(this._client.doc('carts/'+id).delete()).pipe(map(() => void 0));
  }

  set(cart: Partial<CartDTO>): Observable<void> {
    return from(this._client.doc('carts/'+cart.id).update(cart)).pipe(map(() => void 0));
  }
}
