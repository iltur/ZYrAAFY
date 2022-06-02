import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';
import { GETS_ALL_PRODUCT_DTO, GetsAllProductDtoPort } from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import { ProductDetailComponent } from './product-detail.component';

@Component({ selector: 'lib-woman', templateUrl: './woman.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class WomanComponent {
  woman$: Observable<ProductDTO[]> = this._getsAllProductDto.getAll()
 

  constructor(@Inject(GETS_ALL_PRODUCT_DTO) private _getsAllProductDto: GetsAllProductDtoPort) {
  }
}
