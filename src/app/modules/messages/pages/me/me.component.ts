import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services/app/auth.service';
import { MessagesService } from 'src/app/core/services/http/messages.service';
import { IMessage } from '../../interfaces';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
})
export class MeComponent implements OnInit {
  messages: IMessage[] = [];
  username: string = '';

  title: string = 'My Messages';

  constructor(
    private messagesService: MessagesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.username = this.authService.getUserData()?.username;
    this.getOwnerMessages();
  }

  getOwnerMessages() {
    this.messagesService.getOwnerMessages().subscribe({
      next: (messages: Message[]) => this.initMessages(messages),
    });
  }

  messagesAdapter(messages: Message[]): IMessage[] {
    return messages.map((message: Message) => {
      const { title, text, createdAt } = message;
      return {
        title,
        text,
        createdAt,
        username: this.username,
      };
    });
  }

  initMessages(messages: Message[]) {
    this.messages = this.messagesAdapter(messages);
  }
}
