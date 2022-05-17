import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { FirebaseProductServiceModule, ProductListComponentModule } from '@product';
import { HeroComponentModule } from '@hero';
import { FirebaseHeroServiceModule } from '@hero';


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
    FirebaseProductServiceModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule { }
