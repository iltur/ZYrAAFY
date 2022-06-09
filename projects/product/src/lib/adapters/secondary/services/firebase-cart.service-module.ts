import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseCartService } from './firebase-cart.service';
import { GETS_ALL_CART_DTO } from '../../../application/ports/secondary/dto/gets-all-cart.dto-port';
import { REMOVES_CART_DTO } from '../../../application/ports/secondary/dto/removes-cart.dto-port';
import { SETS_CART_DTO } from '../../../application/ports/secondary/dto/sets-cart.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseCartService,
    { provide: GETS_ALL_CART_DTO, useExisting: FirebaseCartService },
    { provide: REMOVES_CART_DTO, useExisting: FirebaseCartService },
    { provide: SETS_CART_DTO, useExisting: FirebaseCartService }
  ],
  exports: [],
})
export class FirebaseCartServiceModule {}
