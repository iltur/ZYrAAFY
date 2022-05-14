import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { OurteamDTO } from '../../../application/ports/secondary/dto/ourteam.dto';
import { GETS_ALL_OURTEAM_DTO, GetsAllOurteamDtoPort } from '../../../application/ports/secondary/dto/gets-all-ourteam.dto-port';

@Component({ selector: 'lib-ourteam', templateUrl: './ourteam.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class OurteamComponent {
  team$: Observable<OurteamDTO[]> = this._getsAllOurteamDto.getAll();

  constructor(@Inject(GETS_ALL_OURTEAM_DTO) private _getsAllOurteamDto: GetsAllOurteamDtoPort) {
  }
}
