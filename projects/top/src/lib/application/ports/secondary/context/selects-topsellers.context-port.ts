import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TopsellersContext } from './topsellers.context';

export const SELECTS_TOPSELLERS_CONTEXT = new InjectionToken<SelectsTopsellersContextPort>('SELECTS_TOPSELLERS_CONTEXT');

export interface SelectsTopsellersContextPort {
  select(): Observable<Partial<TopsellersContext>>;
}
