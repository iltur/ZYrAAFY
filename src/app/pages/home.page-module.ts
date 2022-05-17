import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseHeroServiceModule, HeroComponentModule } from '@hero';
import { FirebaseProductServiceModule, ProductListComponentModule } from '@product';
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
    FirebaseProductServiceModule],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule { }
