import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetsAllProductDtoPort } from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import { GetsOneProductDtoPort } from '../../../application/ports/secondary/dto/gets-one-product.dto-port';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';

@Injectable()
export class FirebaseProductService implements GetsAllProductDtoPort, GetsOneProductDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<ProductDTO[]> {
    return this._client.collection<ProductDTO>('products').valueChanges(({idField: 'id'}));
  }

  getOne(id: string): Observable<ProductDTO | undefined> {
    return this._client.doc<ProductDTO>('products/'+id).valueChanges({idField: 'id'}).pipe(switchMap((item) => (item ? of(item) : throwError(new Error('Item does not exist in firebase')))));
  }
}
