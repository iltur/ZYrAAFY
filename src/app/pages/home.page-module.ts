import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { NavbarComponentModule } from '../../../projects/navbar/src/lib/adapters/primary/ui/navbar.component-module';
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
    NavbarComponentModule,
    ProductListComponentModule,
    FirebaseProductServiceModule, FirebaseHeroServiceModule,
    FirebaseProductServiceModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule { }
