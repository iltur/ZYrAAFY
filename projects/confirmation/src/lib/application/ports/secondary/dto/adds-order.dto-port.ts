import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDTO } from './order.dto';

export const ADDS_ORDER_DTO = new InjectionToken<AddsOrderDtoPort>('ADDS_ORDER_DTO');

export interface AddsOrderDtoPort {
  add(order: Partial<OrderDTO>): Observable<void>;
}
