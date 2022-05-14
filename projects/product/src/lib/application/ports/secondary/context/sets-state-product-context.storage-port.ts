import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductContext } from './product.context';

export const SETS_STATE_PRODUCT_CONTEXT_STORAGE = new InjectionToken<SetsStateProductContextStoragePort>('SETS_STATE_PRODUCT_CONTEXT_STORAGE');

export interface SetsStateProductContextStoragePort {
  setState(state: ProductContext): Observable<void>;
}
