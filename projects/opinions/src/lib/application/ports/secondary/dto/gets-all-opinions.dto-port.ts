import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { OpinionsDTO } from './opinions.dto';

export const GETS_ALL_OPINIONS_DTO = new InjectionToken<GetsAllOpinionsDtoPort>('GETS_ALL_OPINIONS_DTO');

export interface GetsAllOpinionsDtoPort {
  getAll(): Observable<OpinionsDTO[]>;
}
