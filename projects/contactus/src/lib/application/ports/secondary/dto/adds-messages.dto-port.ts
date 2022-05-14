import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagesDTO } from './messages.dto';

export const ADDS_MESSAGES_DTO = new InjectionToken<AddsMessagesDtoPort>('ADDS_MESSAGES_DTO');

export interface AddsMessagesDtoPort {
  add(messages: Partial<MessagesDTO>): Observable<void>;
}
