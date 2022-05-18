import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllOpinionsDtoPort } from '../../../application/ports/secondary/dto/gets-all-opinions.dto-port';
import { OpinionsDTO } from '../../../application/ports/secondary/dto/opinions.dto';

@Injectable()
export class FirebaseOpinionsService implements GetsAllOpinionsDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<OpinionsDTO[]> {
    return this._client.collection<OpinionsDTO>('testimonials').valueChanges(({ idField: 'id' }));
  }
}
