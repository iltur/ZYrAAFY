import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({ selector: 'lib-topsellers', templateUrl: './topsellers.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TopsellersComponent {
}