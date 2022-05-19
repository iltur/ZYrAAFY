import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetsAllTopsellersDtoPort } from '../../../application/ports/secondary/dto/gets-all-topsellers.dto-port';
import { GetsOneTopsellersDtoPort } from '../../../application/ports/secondary/dto/gets-one-topsellers.dto-port';
import { TopsellersDTO } from '../../../application/ports/secondary/dto/topsellers.dto';

@Injectable()
export class FirebaseTopsellersService implements GetsAllTopsellersDtoPort, GetsOneTopsellersDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<TopsellersDTO[]> {
    return this._client.collection<TopsellersDTO>('Topsellers').valueChanges(({idField: 'id'}));
  }

  getOne(id: string): Observable<TopsellersDTO> {
    return this._client.doc<TopsellersDTO>('topsellers/'+id).valueChanges({idField: 'id'}).pipe(switchMap((item) => (item ? of(item) : throwError(new Error('Item does not exist in firebase')))));
  }
}
