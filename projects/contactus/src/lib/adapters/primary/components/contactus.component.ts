import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  ADDS_MESSAGES_DTO,
  AddsMessagesDtoPort,
} from '../../../application/ports/secondary/dto/adds-messages.dto-port';
import { Router } from '@angular/router';
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
    text: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });

  constructor(
    @Inject(ADDS_MESSAGES_DTO) private _addsMessagesDto: AddsMessagesDtoPort,
    private router: Router
  ) {}

  onMessageSubmited(contact: FormGroup): void {
    if (contact.invalid) {
      return;
    }

    this._addsMessagesDto.add({
      name: contact.get('name')?.value,
      email: contact.get('email')?.value,
      text: contact.get('text')?.value,
    });

    this.contact.reset();
    this.router.navigate(['//messagesent']);
  }
}
