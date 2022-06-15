import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ADDS_NEWSLETTER_DTO, AddsNewsletterDtoPort } from '../../../application/ports/secondary/dto/adds-newsletter.dto-port';
import { Router } from '@angular/router';

@Component({ selector: 'lib-footer', templateUrl: './footer.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class FooterComponent {
    readonly newsletter: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_\.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+$')])
    });

    constructor(@Inject(ADDS_NEWSLETTER_DTO) private _addsNewsletterDto: AddsNewsletterDtoPort,
        private router: Router) {
    }

    onNewsletterSubmited(newsletter: FormGroup): void {


        this._addsNewsletterDto.add({
            email: newsletter.get('email')?.value
        }
        );
        this.newsletter.reset();
    }
}
