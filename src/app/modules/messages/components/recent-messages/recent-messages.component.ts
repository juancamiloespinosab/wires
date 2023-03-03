import { Component, OnInit } from '@angular/core';
import {
  IButtonConfig,
  IImage,
  IImageConfig,
} from 'src/app/components/interfaces';
import { RecentMessagesState } from 'src/app/core/state/recent-messages.state';
import { IMessage } from '../../interfaces';

@Component({
  selector: 'app-recent-messages',
  templateUrl: './recent-messages.component.html',
  styleUrls: ['./recent-messages.component.css'],
})
export class RecentMessagesComponent implements OnInit {
  title: string = 'Recent Posts';

  messageImageButton: {
    button: { config: IButtonConfig };
    image: { data: IImage; config: IImageConfig };
  } = {
    button: {
      config: {
        type: 'flat',
      },
    },
    image: {
      data: {
        imageUrl: 'assets/icon/chatbox-ellipses.png',
      },
      config: {
        width: '30px',
      },
    },
  };

  recentMessages: Partial<IMessage>[] = [];

  constructor(private recentMessagesState: RecentMessagesState) {}

  ngOnInit(): void {
    this.recentMessagesState.observable.subscribe((data) => {
      this.recentMessages = data;
    });
  }
}
