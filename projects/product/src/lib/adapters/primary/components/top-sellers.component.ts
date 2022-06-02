import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';
import {
  GETS_ALL_PRODUCT_DTO,
  GetsAllProductDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-product.dto-port';

@Component({
  selector: 'lib-top-sellers',
  templateUrl: './top-sellers.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopSellersComponent {
  topSellers$: Observable<ProductDTO[]> = this._getsAllProductDto.getAll().pipe(
    map((topSell: ProductDTO[]) => topSell.sort((a, b) => b.order - a.order)),
    map((product: ProductDTO[]) => product.slice(0, 3))
  );

  constructor(
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort
  ) {}
}
