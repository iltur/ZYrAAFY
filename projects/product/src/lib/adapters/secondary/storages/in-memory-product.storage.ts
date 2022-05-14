import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SelectsProductContextStoragePort } from '../../../application/ports/secondary/context/selects-product-context.storage-port';
import { SetsStateProductContextStoragePort } from '../../../application/ports/secondary/context/sets-state-product-context.storage-port';
import { ProductContext } from '../../../application/ports/secondary/context/product.context';

@Injectable()
export class InMemoryProductStorage implements SelectsProductContextStoragePort, SetsStateProductContextStoragePort {
    private _subject: Subject<Partial<ProductContext>> = new BehaviorSubject<Partial<ProductContext>>({});

    select(): Observable<Partial<ProductContext>> {
        return this._subject.asObservable().pipe(filter(context => context !== {}));
    }

    setState(state: ProductContext): Observable<void> {
        return of(this._subject.next(state)).pipe(map(() => void 0));
    }
}
