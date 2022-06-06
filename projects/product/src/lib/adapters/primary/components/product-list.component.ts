import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';
import {
  GETS_ALL_PRODUCT_DTO,
  GetsAllProductDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import {
  ADDS_CART_DTO,
  AddsCartDtoPort,
} from '../../../application/ports/secondary/dto/adds-cart.dto-port';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'lib-product-list',
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  products$: Observable<ProductDTO[]> = this._getsAllProductDto.getAll();

  constructor(
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort,
    @Inject(ADDS_CART_DTO) private _addsCartDto: AddsCartDtoPort
  ) {}

  onAddProductToCartClicked(product: ProductDTO): void {
    console.log(product);
    this._addsCartDto
      .add({
        name: product.name,
        description: product.description,
        imageUrl: product.imageUrl,
        order: product.order,
        plec: product.plec,
        price: product.price,
      })
      .subscribe();
  }
}
