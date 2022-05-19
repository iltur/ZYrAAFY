import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllTopsellersDtoPort } from '../../../application/ports/secondary/dto/gets-all-topsellers.dto-port';
import { TopsellersDTO } from '../../../application/ports/secondary/dto/topsellers.dto';

@Injectable()
export class FirebaseTopsellersService implements GetsAllTopsellersDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<TopsellersDTO[]> {
    return this._client.collection<TopsellersDTO>('Topsellers').valueChanges(({idField: 'id'}));
  }
}
