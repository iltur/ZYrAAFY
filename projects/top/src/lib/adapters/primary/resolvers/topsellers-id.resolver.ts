import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs';
import { SetsStateTopsellersContextPort } from '../../../application/ports/secondary/context/sets-state-topsellers.context-port';
import { SETS_STATE_TOPSELLERS_CONTEXT } from '../../../application/ports/secondary/context/sets-state-topsellers.context-port';
@Injectable()
export class TopsellersIdResolver implements Resolve<boolean> {
  constructor(@Inject(SETS_STATE_TOPSELLERS_CONTEXT)private _setsStateTopsellersContext: SetsStateTopsellersContextPort){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._setsStateTopsellersContext.setState({ TopsellersId: route.params ['topsellersId']}).pipe(map(_ => true));
   
  }
}
