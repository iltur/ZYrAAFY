import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllOurteamDtoPort } from '../../../application/ports/secondary/dto/gets-all-ourteam.dto-port';
import { OurteamDTO } from '../../../application/ports/secondary/dto/ourteam.dto';

@Injectable()
export class FirebaseOurteamService implements GetsAllOurteamDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<OurteamDTO[]> {
    return this._client.collection<OurteamDTO>('team').valueChanges(({ idField: 'id' }));
  }
}
