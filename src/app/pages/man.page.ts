import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({ selector: 'app-man-page', templateUrl: './man.page.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ManPage {
}
