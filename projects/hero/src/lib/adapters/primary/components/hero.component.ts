import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroDTO } from '../../../application/ports/secondary/dto/hero.dto';
import { GETS_ALL_HERO_DTO, GetsAllHeroDtoPort } from '../../../application/ports/secondary/dto/gets-all-hero.dto-port';

@Component({
  selector: 'lib-hero',
  templateUrl: './hero.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  image$: Observable<HeroDTO[]> = this._getsAllHeroDto.getAll();

  constructor(@Inject(GETS_ALL_HERO_DTO) private _getsAllHeroDto: GetsAllHeroDtoPort) {
  }
}
