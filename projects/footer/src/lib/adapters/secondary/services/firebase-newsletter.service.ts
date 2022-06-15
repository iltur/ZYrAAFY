import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddsNewsletterDtoPort } from '../../../application/ports/secondary/dto/adds-newsletter.dto-port';
import { NewsletterDTO } from '../../../application/ports/secondary/dto/newsletter.dto';

@Injectable()
export class FirebaseNewsletterService implements AddsNewsletterDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(newsletter: Partial<NewsletterDTO>): Observable<void> {
    return from(this._client.collection('newsletters').add(newsletter)).pipe(map(() => void 0));
  }
}
