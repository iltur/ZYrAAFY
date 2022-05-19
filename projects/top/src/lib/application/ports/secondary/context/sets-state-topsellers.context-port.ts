import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TopsellersContext } from './topsellers.context';

export const SETS_STATE_TOPSELLERS_CONTEXT = new InjectionToken<SetsStateTopsellersContextPort>('SETS_STATE_TOPSELLERS_CONTEXT');

export interface SetsStateTopsellersContextPort {
  setState(state: TopsellersContext): Observable<void>;
}
