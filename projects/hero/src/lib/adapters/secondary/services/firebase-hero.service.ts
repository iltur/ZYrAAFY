import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllHeroDtoPort } from '../../../application/ports/secondary/dto/gets-all-hero.dto-port';
import { HeroDTO } from '../../../application/ports/secondary/dto/hero.dto';

@Injectable()
export class FirebaseHeroService implements GetsAllHeroDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<HeroDTO[]> {
    return this._client.collection<HeroDTO>('heroes').valueChanges(({idField: 'id'}));
  }
}
