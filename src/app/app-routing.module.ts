import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { AboutusPageModule } from './pages/aboutus.page-module';
import { ContactusPageModule } from './pages/contactus.page-module';
import { ProductdetailPageModule } from './pages/productdetail.page-module';
import { ConfirmationPageModule } from './pages/confirmation.page-module';
import { CartPageModule } from './pages/cart.page-module';
import { TopsellersdetalisPageModule } from './pages/topsellersdetalis.page-module';

const routes: Routes = [{
  path: 'home',
  loadChildren: () => HomePageModule
},
{
  path: 'aboutus',
  loadChildren: () => AboutusPageModule
},
{
  path: 'contactus',
  loadChildren: () => ContactusPageModule
},
{
  path: 'details/:productId',
  loadChildren: () => ProductdetailPageModule
},
{
  path: 'confirmation',
  loadChildren: () => ConfirmationPageModule
},
{
  path: '',
  loadChildren: () => HomePageModule
},
{
  path: 'shoppingcart',
  loadChildren: () => CartPageModule
},
  { 
        path: 'topdetalis/:topsellersId', 
        loadChildren: () => TopsellersdetalisPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
