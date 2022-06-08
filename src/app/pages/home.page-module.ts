import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseHeroServiceModule, HeroComponentModule } from '@hero';
import { BargainsComponentModule, FirebaseProductServiceModule, ProductListComponentModule, ShopDescriptionComponentModule, TopSellersComponentModule } from '@product';
import { FirebaseTopsellersServiceModule, TopsellersComponentModule } from '@top';
import { FooterComponentModule } from '@footer';
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
    FirebaseProductServiceModule, TopsellersComponentModule, FirebaseTopsellersServiceModule, ShopDescriptionComponentModule, TopSellersComponentModule,FooterComponentModule, BargainsComponentModule],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule { }
