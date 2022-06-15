import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ADDS_NEWSLETTER_DTO, AddsNewsletterDtoPort } from '../../../application/ports/secondary/dto/adds-newsletter.dto-port';

@Component({ selector: 'lib-footer', templateUrl: './footer.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class FooterComponent {
    readonly newsletter: FormGroup = new FormGroup({ email: new FormControl() });

    constructor(@Inject(ADDS_NEWSLETTER_DTO) private _addsNewsletterDto: AddsNewsletterDtoPort) {
    }

    onNewsletterSubmited(newsletter: FormGroup): void {
        this._addsNewsletterDto.add({
            email: newsletter.get('email')?.value
        }
        )
    }
}
