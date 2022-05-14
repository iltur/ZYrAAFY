import { NgModule } from '@angular/core';
import { InMemoryProductStorage } from './in-memory-product.storage';
import { SELECTS_PRODUCT_CONTEXT_STORAGE } from '../../../application/ports/secondary/context/selects-product-context.storage-port';
import { SETS_STATE_PRODUCT_CONTEXT_STORAGE } from '../../../application/ports/secondary/context/sets-state-product-context.storage-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryProductStorage, { provide: SELECTS_PRODUCT_CONTEXT_STORAGE, useExisting: InMemoryProductStorage }, { provide: SETS_STATE_PRODUCT_CONTEXT_STORAGE, useExisting: InMemoryProductStorage }],
  	exports: [] })
export class InMemoryProductStorageModule {
}
