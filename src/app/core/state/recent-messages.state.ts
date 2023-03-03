import { Injectable } from '@angular/core';
import { IMessage } from 'src/app/modules/messages/interfaces';
import { State } from './state';

@Injectable({
  providedIn: 'root',
})
export class RecentMessagesState extends State<IMessage[]> {
  recentMessages: IMessage[] = [];

  constructor() {
    super();
  }

  pushNewMessage(message: IMessage) {
    this.recentMessages.push(message);
    this.observableData = this.recentMessages;
  }
}
