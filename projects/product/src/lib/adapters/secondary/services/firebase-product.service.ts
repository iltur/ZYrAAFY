import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllProductDtoPort } from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';

@Injectable()
export class FirebaseProductService implements GetsAllProductDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<ProductDTO[]> {
    return this._client.collection<ProductDTO>('products').valueChanges(({idField: 'id'}));
  }
}
