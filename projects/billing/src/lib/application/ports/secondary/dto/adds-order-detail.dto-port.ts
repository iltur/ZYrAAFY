import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetailDTO } from './order-detail.dto';

export const ADDS_ORDER_DETAIL_DTO = new InjectionToken<AddsOrderDetailDtoPort>('ADDS_ORDER_DETAIL_DTO');

export interface AddsOrderDetailDtoPort {
  add(orderDetail: Partial<OrderDetailDTO>): Observable<void>;
}
