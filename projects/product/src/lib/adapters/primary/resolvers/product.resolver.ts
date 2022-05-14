import { Injectable, Inject } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SETS_STATE_PRODUCT_CONTEXT_STORAGE, SetsStateProductContextStoragePort } from '../../../application/ports/secondary/context/sets-state-product-context.storage-port';

@Injectable()
export class ProductResolver implements Resolve<boolean> {
  constructor(@Inject(SETS_STATE_PRODUCT_CONTEXT_STORAGE) private _setsStateProductContextStorage: SetsStateProductContextStoragePort) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._setsStateProductContextStorage.setState({ productId: route.params['productId'] }).pipe(map(_ => true));
  }
}
