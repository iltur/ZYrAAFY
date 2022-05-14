import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseOurteamService } from './firebase-ourteam.service';
import { GETS_ALL_OURTEAM_DTO } from '../../../application/ports/secondary/dto/gets-all-ourteam.dto-port';

@NgModule({
	imports: [AngularFirestoreModule],
	declarations: [],
	providers: [FirebaseOurteamService, { provide: GETS_ALL_OURTEAM_DTO, useExisting: FirebaseOurteamService }],
	exports: []
})
export class FirebaseOurteamServiceModule {
}
