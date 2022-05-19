import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SetsStateTopsellersContextPort } from '../../../application/ports/secondary/context/sets-state-topsellers.context-port';
import { SelectsTopsellersContextPort } from '../../../application/ports/secondary/context/selects-topsellers.context-port';
import { TopsellersContext } from '../../../application/ports/secondary/context/topsellers.context';

@Injectable()
export class InMemoryTopsellerStorage implements SetsStateTopsellersContextPort, SelectsTopsellersContextPort {
  private _subject: Subject<Partial<TopsellersContext>> = new BehaviorSubject<Partial<TopsellersContext>>({});

  setState(state: TopsellersContext): Observable<void> {
    return of(this._subject.next(state)).pipe(map(() => void 0));
  }

  select(): Observable<Partial<TopsellersContext>> {
    return this._subject.asObservable().pipe(filter(context => context !== {}));
  }
}
