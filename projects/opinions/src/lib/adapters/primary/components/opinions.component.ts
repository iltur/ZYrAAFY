import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { OpinionsDTO } from '../../../application/ports/secondary/dto/opinions.dto';
import { GETS_ALL_OPINIONS_DTO, GetsAllOpinionsDtoPort } from '../../../application/ports/secondary/dto/gets-all-opinions.dto-port';

@Component({ selector: 'lib-opinions', templateUrl: './opinions.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class OpinionsComponent {
    opinion$: Observable<OpinionsDTO[]> = this._getsAllOpinionsDto.getAll();

    constructor(@Inject(GETS_ALL_OPINIONS_DTO) private _getsAllOpinionsDto: GetsAllOpinionsDtoPort) {
    }
}
