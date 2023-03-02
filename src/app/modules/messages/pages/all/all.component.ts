import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/core/models';
import { MessagesService } from 'src/app/core/services/http/messages.service';
import { IMessage } from '../../interfaces';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  messages: IMessage[] = [];

  title: string = 'All Messages';

  constructor(private messagesService: MessagesService) {}

  ngOnInit(): void {
    this.getAllMessages();
  }

  getAllMessages() {
    this.messagesService.getAllMessages().subscribe({
      next: (messages: Message[]) => this.initMessages(messages),
    });
  }

  messagesAdapter(messages: Message[]): IMessage[] {
    return messages.map((message: Message) => {
      const { title, text, createdAt, user } = message;
      const { username } = user;
      return {
        title,
        text,
        createdAt,
        username,
      };
    });
  }

  initMessages(messages: Message[]) {
    this.messages = this.messagesAdapter(messages);
  }
}
