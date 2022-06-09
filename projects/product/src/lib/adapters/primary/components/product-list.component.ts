import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';
import { CartDTO } from '../../../application/ports/secondary/dto/cart.dto';
import {
  GETS_ALL_PRODUCT_DTO,
  GetsAllProductDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import {
  ADDS_CART_DTO,
  AddsCartDtoPort,
} from '../../../application/ports/secondary/dto/adds-cart.dto-port';
import {
  GETS_ALL_CART_DTO,
  GetsAllCartDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-cart.dto-port';

@Component({
  selector: 'lib-product-list',
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  products$: Observable<ProductDTO[]> = this._getsAllProductDto.getAll();
  readonly quantity: FormGroup = new FormGroup({ quantity: new FormControl() });
  cart$: Observable<CartDTO[]> = this._getsAllCartDto.getAll();
  cartTotal$: Observable<any> = this.cart$.pipe(
    map((cartTotal) => {
      return console.log(cartTotal);
    })
  );

  constructor(
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort,
    @Inject(ADDS_CART_DTO) private _addsCartDto: AddsCartDtoPort,
    @Inject(GETS_ALL_CART_DTO) private _getsAllCartDto: GetsAllCartDtoPort
  ) {}

  onAddProductToCartClicked(product: ProductDTO, quantity: FormGroup): void {
    this._addsCartDto
      .add({
        name: product.name,
        description: product.description,
        imageUrl: product.imageUrl,
        order: product.order,
        plec: product.plec,
        price: product.price,
        quantity: quantity.get('quantity')?.value,
      })
      .subscribe();
  }
}
