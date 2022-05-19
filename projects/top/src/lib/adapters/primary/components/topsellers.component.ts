import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { TopsellersDTO } from '../../../application/ports/secondary/dto/topsellers.dto';
import { GETS_ALL_TOPSELLERS_DTO, GetsAllTopsellersDtoPort } from '../../../application/ports/secondary/dto/gets-all-topsellers.dto-port';
import { GETS_ONE_TOPSELLERS_DTO, GetsOneTopsellersDtoPort } from '../../../application/ports/secondary/dto/gets-one-topsellers.dto-port';

@Component({ selector: 'lib-topsellers', templateUrl: './topsellers.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TopsellersComponent {
  topsellers$: Observable<TopsellersDTO[]> = this._getsAllTopsellersDto.getAll();


  constructor(@Inject(GETS_ALL_TOPSELLERS_DTO) private _getsAllTopsellersDto: GetsAllTopsellersDtoPort, @Inject(GETS_ONE_TOPSELLERS_DTO) private _getsOneTopsellersDto: GetsOneTopsellersDtoPort) {
  }
}
