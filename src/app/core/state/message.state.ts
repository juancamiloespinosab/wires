import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';
import { State } from './state';

@Injectable({
  providedIn: 'root',
})
export class UsersState extends State<Message[]> {
  constructor() {
    super();
  }
}
