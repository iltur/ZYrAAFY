import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {
  ADDS_ORDER_DETAIL_DTO,
  AddsOrderDetailDtoPort,
} from '../../../application/ports/secondary/dto/adds-order-detail.dto-port';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-billing-detail',
  templateUrl: './billing-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillingDetailComponent {
  count: number = Date.now();
  nameValidation = false;
  adressValidation = false;
  townValidation = false;
  phoneValidation = false;
  emailValidation = false;

  readonly orderDetail: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    adress: new FormControl('', Validators.required),
    town: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  constructor(
    @Inject(ADDS_ORDER_DETAIL_DTO)
    private _addsOrderDto: AddsOrderDetailDtoPort,
    private router: Router,
    @Inject(ADDS_ORDER_DETAIL_DTO)
    private _addsOrderDetailDto: AddsOrderDetailDtoPort
  ) {}

  onOrderDetailsSubmited(orderDetail: FormGroup): void {
    if (orderDetail.invalid) {
      return;
    }
    this._addsOrderDto.add({
      name: orderDetail.get('name')?.value,
      adress: orderDetail.get('adress')?.value,
      town: orderDetail.get('town')?.value,
      phone: orderDetail.get('phone')?.value,
      email: orderDetail.get('email')?.value,
    });
    orderDetail.reset();
  }
  onItemClicked(orderDetail: FormGroup) {
    if (!orderDetail.value.name) {
      this.nameValidation = true;
    } else {
      this.nameValidation = false;
    }

    if (!orderDetail.value.adress) {
      this.adressValidation = true;
    } else {
      this.adressValidation = false;
    }

    if (!orderDetail.value.town) {
      this.townValidation = true;
    } else {
      this.townValidation = false;
    }

    if (!orderDetail.value.phone) {
      this.phoneValidation = true;
    } else {
      this.phoneValidation = false;
    }

    if (!orderDetail.value.email) {
      this.emailValidation = true;
    } else {
      this.emailValidation = false;
    }
    if (
      !this.nameValidation &&
      !this.adressValidation &&
      !this.townValidation &&
      !this.phoneValidation &&
      !this.emailValidation
    ) {
      this.router.navigate(['/confirmation']);
    }
  }
}
