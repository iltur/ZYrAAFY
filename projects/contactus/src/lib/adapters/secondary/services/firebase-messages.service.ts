import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddsMessagesDtoPort } from '../../../application/ports/secondary/dto/adds-messages.dto-port';
import { MessagesDTO } from '../../../application/ports/secondary/dto/messages.dto';

@Injectable()
export class FirebaseMessagesService implements AddsMessagesDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(messages: Partial<MessagesDTO>): Observable<void> {
    return from(this._client.collection('messages').add(messages)).pipe(map(() => void 0));
  }
}
