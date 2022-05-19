import { NgModule } from '@angular/core';
import { InMemoryTopsellerStorage } from './in-memory-topseller.storage';
import { SETS_STATE_TOPSELLERS_CONTEXT } from '../../../application/ports/secondary/context/sets-state-topsellers.context-port';
import { SELECTS_TOPSELLERS_CONTEXT } from '../../../application/ports/secondary/context/selects-topsellers.context-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryTopsellerStorage, { provide: SETS_STATE_TOPSELLERS_CONTEXT, useExisting: InMemoryTopsellerStorage }, { provide: SELECTS_TOPSELLERS_CONTEXT, useExisting: InMemoryTopsellerStorage }],
  	exports: [] })
export class InMemoryTopsellerStorageModule {
}
