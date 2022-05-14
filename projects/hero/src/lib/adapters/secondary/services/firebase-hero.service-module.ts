import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseHeroService } from './firebase-hero.service';
import { GETS_ALL_HERO_DTO } from '../../../application/ports/secondary/dto/gets-all-hero.dto-port';

@NgModule({
	imports: [AngularFirestoreModule],
	declarations: [],
	providers: [FirebaseHeroService, { provide: GETS_ALL_HERO_DTO, useExisting: FirebaseHeroService }],
	exports: []
})
export class FirebaseHeroServiceModule {
}
