import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { TopsellersDTO } from '../../../application/ports/secondary/dto/topsellers.dto';
import { TopsellersContext } from '../../../application/ports/secondary/context/topsellers.context';
import { GETS_ONE_TOPSELLERS_DTO, GetsOneTopsellersDtoPort } from '../../../application/ports/secondary/dto/gets-one-topsellers.dto-port';
import { SELECTS_TOPSELLERS_CONTEXT, SelectsTopsellersContextPort } from '../../../application/ports/secondary/context/selects-topsellers.context-port';

@Component({ selector: 'lib-topsellers-detalis', templateUrl: './topsellers-detalis.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TopsellersDetalisComponent {
  topsellersDetalis$: Observable<TopsellersDTO> = this._selectsTopsellersContext.select().pipe(
      switchMap(p => this._getsOneTopsellersDto.getOne(p.topsellersId as string))
  );

  constructor(@Inject(GETS_ONE_TOPSELLERS_DTO) private _getsOneTopsellersDto: GetsOneTopsellersDtoPort, @Inject(SELECTS_TOPSELLERS_CONTEXT) private _selectsTopsellersContext: SelectsTopsellersContextPort) {
  }
}
