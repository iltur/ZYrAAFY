import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ADDS_ORDER_DTO } from '../../../application/ports/secondary/dto/adds-order.dto-port';
import { AddsOrderDtoPort } from '../../../application/ports/secondary/dto/adds-order.dto-port';

@Component({ selector: 'lib-billing-detail', templateUrl: './billing-detail.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class BillingDetailComponent {
    count: number = Date.now()

    readonly details: FormGroup = new FormGroup({ name: new FormControl('', [Validators.required]), address: new FormControl('', [Validators.required]), town: new FormControl('', [Validators.required]), code: new FormControl('', [Validators.required]), country: new FormControl('', [Validators.required]), phone: new FormControl('', [Validators.required]), email: new FormControl('', [Validators.required]), delivery: new FormControl('', [Validators.required]) });

    constructor(@Inject(ADDS_ORDER_DTO) private _addsOrderDto: AddsOrderDtoPort, private router: Router) {
    }

    onOrderSubmited(details: FormGroup): void {
        if (details.invalid) {
            return
        }
        this._addsOrderDto.add({
            name: details?.get('name')?.value,
            address: details?.get('address')?.value,
            town: details?.get('town')?.value,
            code: details?.get('code')?.value,
            country: details?.get('country')?.value,
            phone: details?.get('phone')?.value,
            email: details?.get('email')?.value,
            delivery: details?.get('delivery')?.value,
            count: Date.now(),

        });
        this.details.reset();
        this.router.navigate(['./confirmation'])
    }
}


