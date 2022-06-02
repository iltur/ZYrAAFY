import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { TopsellersDTO } from '../../../application/ports/secondary/dto/topsellers.dto';
import {
  GETS_ALL_TOPSELLERS_DTO,
  GetsAllTopsellersDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-topsellers.dto-port';
import {
  GETS_ALL_PRODUCT_DTO,
  GetsAllProductDtoPort,
} from '../../../../../../product/src/lib/application/ports/secondary/dto/gets-all-product.dto-port';
import { ProductDTO } from 'projects/product/src/lib/application/ports/secondary/dto/product.dto';

@Component({
  selector: 'lib-topsellers',
  templateUrl: './topsellers.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopsellersComponent {
  topsellers$: Observable<ProductDTO[]> = this._getsAllProductDtoPort
    .getAll()
    .pipe(map((product: ProductDTO[]) => product.slice(0, 2)));

  constructor(
    @Inject(GETS_ALL_TOPSELLERS_DTO)
    private _getsAllTopsellersDto: GetsAllTopsellersDtoPort,
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDtoPort: GetsAllProductDtoPort
  ) {}
}
