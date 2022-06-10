import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';
import { CartDTO } from '../../../../../../cart/src/lib/application/ports/secondary/dto/cart.dto';
import {
  GETS_ONE_PRODUCT_DTO,
  GetsOneProductDtoPort,
} from '../../../application/ports/secondary/dto/gets-one-product.dto-port';
import {
  SELECTS_PRODUCT_CONTEXT,
  SelectsProductContextPort,
} from '../../../application/ports/secondary/context/selects-product.context-port';
import {
  ADDS_CART_DTO,
  AddsCartDtoPort,
} from '../../../../../../cart/src/lib/application/ports/secondary/dto/adds-cart.dto-port';
import {
  GETS_ALL_CART_DTO,
  GetsAllCartDtoPort,
} from '../../../../../../cart/src/lib/application/ports/secondary/dto/gets-all-cart.dto-port';
import {
  GETS_ALL_PRODUCT_DTO,
  GetsAllProductDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-product.dto-port';

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

  readonly quantity: FormGroup = new FormGroup({ quantity: new FormControl() });
  cart$: Observable<CartDTO[]> = this._getsAllCartDto.getAll();
  products$: Observable<ProductDTO[]> = this._getsAllProductDto.getAll();

  constructor(
    @Inject(GETS_ONE_PRODUCT_DTO)
    private _getsOneProductDto: GetsOneProductDtoPort,
    @Inject(SELECTS_PRODUCT_CONTEXT)
    private _selectsProductContextStorage: SelectsProductContextPort,
    @Inject(ADDS_CART_DTO) private _addsCartDto: AddsCartDtoPort,

    @Inject(GETS_ALL_CART_DTO) private _getsAllCartDto: GetsAllCartDtoPort,
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort
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
