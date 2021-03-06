import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CartDTO } from './cart.dto';

export const ADDS_CART_DTO = new InjectionToken<AddsCartDtoPort>('ADDS_CART_DTO');

export interface AddsCartDtoPort {
  add(cart: Partial<CartDTO>): Observable<void>;
}
