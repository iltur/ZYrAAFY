import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllCartDtoPort } from '../../../application/ports/secondary/dto/gets-all-cart.dto-port';
import { CartDTO } from '../../../application/ports/secondary/dto/cart.dto';

@Injectable()
export class FirebaseCartService implements GetsAllCartDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(): Observable<CartDTO[]> {
    return this._client
      .collection<CartDTO>('carts')
      .valueChanges({ idField: 'id' });
  }
}
