import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductContext } from './product.context';

export const SELECTS_PRODUCT_CONTEXT_STORAGE = new InjectionToken<SelectsProductContextStoragePort>('SELECTS_PRODUCT_CONTEXT_STORAGE');

export interface SelectsProductContextStoragePort {
  select(): Observable<Partial<ProductContext>>;
}
