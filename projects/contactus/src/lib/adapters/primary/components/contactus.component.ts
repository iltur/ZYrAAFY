
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ADDS_MESSAGES_DTO, AddsMessagesDtoPort } from '../../../application/ports/secondary/dto/adds-messages.dto-port';

@Component({
  selector: 'lib-contactus',
  templateUrl: './contactus.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactusComponent {
  readonly contact: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    text: new FormControl('', [Validators.required, Validators.minLength(1)])
  });

  constructor(@Inject(ADDS_MESSAGES_DTO) private _addsMessagesDto: AddsMessagesDtoPort) {
  }

  onMessageSubmited(contact: FormGroup): void {
    if (contact.invalid) { return }

    // jak wywołać alert w przypadku braku małpy w adresei email?


    this._addsMessagesDto.add({
      name: contact.get('name')?.value,
      email: contact.get('email')?.value,
      text: contact.get('text')?.value
    });

    this.contact.reset();




  }


}
