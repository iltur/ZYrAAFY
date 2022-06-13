import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CartDTO } from '../../../application/ports/secondary/dto/cart.dto';
import { GETS_ALL_CART_DTO, GetsAllCartDtoPort } from '../../../application/ports/secondary/dto/gets-all-cart.dto-port';
import { REMOVES_CART_DTO, RemovesCartDtoPort } from '../../../application/ports/secondary/dto/removes-cart.dto-port';
import { SETS_CART_DTO, SetsCartDtoPort } from '../../../application/ports/secondary/dto/sets-cart.dto-port';

@Component({
  selector: 'lib-cart',
  templateUrl: './cart.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  cartProducts$: Observable<CartDTO[]> = this._getsAllCartDto.getAll();

  readonly setQuantity: FormGroup = new FormGroup({
    quantity: new FormControl(),
  });

  constructor(
    @Inject(GETS_ALL_CART_DTO) private _getsAllCartDto: GetsAllCartDtoPort,
    @Inject(REMOVES_CART_DTO) private _removesCartDto: RemovesCartDtoPort,
    @Inject(SETS_CART_DTO) private _setsCartDto: SetsCartDtoPort
  ) {}
  




  onDeleteProduct(Id: string): void {
    this._removesCartDto.remove(Id);
  }

  UpperButton(cartProduct: { quantity: number }) {
    console.log(cartProduct);
    cartProduct.quantity++;
  }

  LowerButton(cartProduct: { quantity: number }) {
    console.log(cartProduct);
    if (cartProduct.quantity != 1) {
      cartProduct.quantity--;
    }
  }}
  
