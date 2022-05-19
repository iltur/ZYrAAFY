import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TopsellersDTO } from './topsellers.dto';

export const GETS_ONE_TOPSELLERS_DTO = new InjectionToken<GetsOneTopsellersDtoPort>('GETS_ONE_TOPSELLERS_DTO');

export interface GetsOneTopsellersDtoPort {
  getOne(id: string): Observable<TopsellersDTO>;
}
