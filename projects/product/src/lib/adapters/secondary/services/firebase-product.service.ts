import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from, of, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GetsAllProductDtoPort } from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import { GetsOneProductDtoPort } from '../../../application/ports/secondary/dto/gets-one-product.dto-port';
import { AddsCartDtoPort } from '../../../application/ports/secondary/dto/adds-cart.dto-port';
import { GetsAllCartDtoPort } from '../../../application/ports/secondary/dto/gets-all-cart.dto-port';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';
import { CartDTO } from '../../../application/ports/secondary/dto/cart.dto';

@Injectable()
export class FirebaseProductService
  implements
    GetsAllProductDtoPort,
    GetsOneProductDtoPort,
    AddsCartDtoPort,
    GetsAllCartDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAll(): Observable<ProductDTO[]> {
    return this._client
      .collection<ProductDTO>('products')
      .valueChanges({ idField: 'id' });
  }

  getOne(id: string): Observable<ProductDTO> {
    return this._client
      .doc<ProductDTO>('products/' + id)
      .valueChanges({ idField: 'id' })
      .pipe(
        switchMap((item) =>
          item
            ? of(item)
            : throwError(new Error('Item does not exist in firebase'))
        )
      );
  }

  add(cart: Partial<CartDTO>): Observable<void> {
    return from(this._client.collection('carts').add(cart)).pipe(
      map(() => void 0)
    );
  }
}
