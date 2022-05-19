import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopsellersdetalisPage } from './topsellersdetalis.page';
import { FirebaseTopsellersServiceModule, TopsellersDetalisComponentModule } from '@top';

import { TopsellersIdResolver } from 'projects/top/src/lib/adapters/primary/resolvers/topsellers-id.resolver';
import { InMemoryProductStorageModule } from '@product';
import { TopsellersIdResolverModule } from 'projects/top/src/lib/adapters/primary/resolvers/topsellers-id.resolver-module';



@NgModule({ imports: [CommonModule,  FirebaseTopsellersServiceModule, InMemoryProductStorageModule, TopsellersIdResolverModule,
  TopsellersDetalisComponentModule, RouterModule.forChild([
   {
          path: '',
          component: TopsellersdetalisPage,
          resolve: [TopsellersIdResolver]
        } 
        
      ]),],
  	declarations: [TopsellersdetalisPage],
  	providers: [],
  	exports: [] 
  })

export class TopsellersdetalisPageModule {
}
