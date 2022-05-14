import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ADDS_MESSAGES_DTO, AddsMessagesDtoPort } from '../../../application/ports/secondary/dto/adds-messages.dto-port';

@Component({
  selector: 'lib-contactus',
  templateUrl: './contactus.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactusComponent {
  readonly contact: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    text: new FormControl(),
  });

  constructor(@Inject(ADDS_MESSAGES_DTO) private _addsMessagesDto: AddsMessagesDtoPort) {
  }

  onMessageSubmited(message: FormGroup): void {
    this._addsMessagesDto.add({
      name: message.get('name')?.value,
      email: message.get('email')?.value,
      text: message.get('text')?.value

    }

    );
  }
}
