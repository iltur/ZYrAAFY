import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';
import { ProductContext } from '../../../application/ports/secondary/context/product.context';
import {
  GETS_ONE_PRODUCT_DTO,
  GetsOneProductDtoPort,
} from '../../../application/ports/secondary/dto/gets-one-product.dto-port';
import {
  SELECTS_PRODUCT_CONTEXT,
  SelectsProductContextPort,
} from '../../../application/ports/secondary/context/selects-product.context-port';

@Component({
  selector: 'lib-product-detail',
  templateUrl: './product-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {
  productDetail$: Observable<ProductDTO> = this._selectsProductContextStorage
    .select()
    .pipe(
      switchMap((p) => this._getsOneProductDto.getOne(p.productId as string))
    );

  constructor(
    @Inject(GETS_ONE_PRODUCT_DTO)
    private _getsOneProductDto: GetsOneProductDtoPort,
    @Inject(SELECTS_PRODUCT_CONTEXT)
    private _selectsProductContextStorage: SelectsProductContextPort
  ) {}
}
