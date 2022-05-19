import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TopsellersDTO } from './topsellers.dto';

export const GETS_ALL_TOPSELLERS_DTO = new InjectionToken<GetsAllTopsellersDtoPort>('GETS_ALL_TOPSELLERS_DTO');

export interface GetsAllTopsellersDtoPort {
  getAll(): Observable<TopsellersDTO[]>;
}
