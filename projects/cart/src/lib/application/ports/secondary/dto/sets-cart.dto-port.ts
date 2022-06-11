import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CartDTO } from './cart.dto';

export const SETS_CART_DTO = new InjectionToken<SetsCartDtoPort>('SETS_CART_DTO');

export interface SetsCartDtoPort {
  set(cart: Partial<CartDTO>): Observable<void>;
}
