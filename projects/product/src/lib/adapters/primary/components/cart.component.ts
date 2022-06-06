import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CartDTO } from '../../../application/ports/secondary/dto/cart.dto';
import { GETS_ALL_CART_DTO, GetsAllCartDtoPort } from '../../../application/ports/secondary/dto/gets-all-cart.dto-port';

@Component({
  selector: 'lib-cart',
  templateUrl: './cart.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  cartProducts$: Observable<CartDTO[]> = this._getsAllCartDto.getAll();

  constructor(@Inject(GETS_ALL_CART_DTO) private _getsAllCartDto: GetsAllCartDtoPort) {}
}
