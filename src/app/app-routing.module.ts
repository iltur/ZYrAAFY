import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { AboutusPageModule } from './pages/aboutus.page-module';
import { ContactusPageModule } from './pages/contactus.page-module';
import { ProductdetailPageModule } from './pages/productdetail.page-module';
import { ConfirmationPageModule } from './pages/confirmation.page-module';
import { CartPageModule } from './pages/cart.page-module';
import { TopsellersdetalisPageModule } from './pages/topsellersdetalis.page-module';
import { BillingDetailPageModule } from './pages/billing-detail.page-module';
import { SendConfirmationPageModule } from './pages/send-confirmation.page-module';
import { WomanPageModule } from './pages/woman.page-module';
import { ManPageModule } from './pages/man.page-module';
import { TermsPageModule } from './pages/terms.page-module';
import { PrivacyPolicyPageModule } from './pages/privacy-policy.page-module';
import { SpecialOffersPageModule } from './pages/special-offers.page-module';
import { DeliveryPageModule } from './pages/delivery.page-module';

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
},
{
  path: 'billing',
  loadChildren: () => BillingDetailPageModule
},
{
  path: 'messagesent',
  loadChildren: () => SendConfirmationPageModule
},
{
  path: 'woman',
  loadChildren: () => WomanPageModule
},
{
  path: 'man',
  loadChildren: () => ManPageModule
},
{
  path: 'terms',
  loadChildren: () => TermsPageModule
},
{
  path: 'privacy',
  loadChildren: () => PrivacyPolicyPageModule
},
{
  path: 'special-offers',
  loadChildren: () => SpecialOffersPageModule
},
{
  path: 'delivery',
  loadChildren: () => DeliveryPageModule
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
