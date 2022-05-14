import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroDTO } from './hero.dto';

export const GETS_ALL_HERO_DTO = new InjectionToken<GetsAllHeroDtoPort>('GETS_ALL_HERO_DTO');

export interface GetsAllHeroDtoPort {
  getAll(): Observable<HeroDTO[]>;
}
