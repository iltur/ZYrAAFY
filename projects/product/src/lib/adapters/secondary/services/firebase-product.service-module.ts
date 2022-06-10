import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseProductService } from './firebase-product.service';
import { GETS_ALL_PRODUCT_DTO } from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import { GETS_ONE_PRODUCT_DTO } from '../../../application/ports/secondary/dto/gets-one-product.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseProductService,
    { provide: GETS_ALL_PRODUCT_DTO, useExisting: FirebaseProductService },
    { provide: GETS_ONE_PRODUCT_DTO, useExisting: FirebaseProductService },
  ],
  exports: [],
})
export class FirebaseProductServiceModule {}
