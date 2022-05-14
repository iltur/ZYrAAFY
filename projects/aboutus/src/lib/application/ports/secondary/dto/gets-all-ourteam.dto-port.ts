import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { OurteamDTO } from './ourteam.dto';

export const GETS_ALL_OURTEAM_DTO = new InjectionToken<GetsAllOurteamDtoPort>('GETS_ALL_OURTEAM_DTO');

export interface GetsAllOurteamDtoPort {
  getAll(): Observable<OurteamDTO[]>;
}
