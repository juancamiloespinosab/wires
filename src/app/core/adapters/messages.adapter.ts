import { Injectable } from '@angular/core';
import { IMessage } from 'src/app/modules/messages/interfaces';
import { Message } from '../models';
import { AuthService } from '../services/app/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MessagesAdapter {
  constructor(private authService: AuthService) {}

  adapter(messages: Message[]): IMessage[] {
    return messages.map((message: Message) => {
      const {
        title,
        text,
        createdAt,
        comments,
        user = { username: this.authService.getUserData()?.username },
      } = message;
      const { username } = user;
      return {
        title,
        text,
        createdAt,
        username,
        comments: comments.map((comment: string) => JSON.parse(comment)),
      };
    });
  }
}
