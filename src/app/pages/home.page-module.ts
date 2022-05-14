import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { NavbarComponentModule } from '../../../projects/navbar/src/lib/adapters/primary/ui/navbar.component-module';
import {
  FirebaseProductServiceModule,
  ProductListComponentModule,
} from '@product';
import { ProductDetailComponentModule } from '@product';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    NavbarComponentModule,
    ProductListComponentModule,
    FirebaseProductServiceModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
