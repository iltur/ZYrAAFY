import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseHeroServiceModule, HeroComponentModule } from '@hero';
import { FirebaseProductServiceModule, ProductListComponentModule } from '@product';
import { TopsellersComponentModule } from '@top';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule, HeroComponentModule,

    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    ProductListComponentModule,
    FirebaseProductServiceModule, FirebaseHeroServiceModule,
    FirebaseProductServiceModule, TopsellersComponentModule],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule { }
