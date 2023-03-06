import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  IButtonConfig,
  ITextInput,
  ITextInputConfig,
} from 'src/app/components/interfaces';
import { MessagesService } from 'src/app/core/services/http/messages.service';
import { IMessage } from '../../interfaces';
import { RecentMessagesState } from '../../../../core/state/recent-messages.state';
import { Message } from 'src/app/core/models';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    text: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z0-9\s.,]+$/),
    ]),
  });

  title: string = 'Create Message';

  shareButton: { text: string; config: IButtonConfig; action: () => void } = {
    action: this.getCreateMessageFn(),
    text: 'Share',
    config: {
      type: 'white',
    },
  };

  fields: { data: ITextInput; config: ITextInputConfig }[] = [
    {
      data: {
        label: 'Title messages',
        placeholder: 'Talk about me',
        formControl: this.form.controls['title'],
      },
      config: { type: 'text' },
    },
    {
      data: {
        label: 'Message',
        placeholder: 'Message',
        formControl: this.form.controls['text'],
      },
      config: { type: 'textarea' },
    },
  ];

  message: IMessage = {
    title: 'Title messages',
    text: 'Message',
    createdAt: new Date(),
    username: 'Juan Espinosa',
    comments: [],
  };

  constructor(
    private messagesService: MessagesService,
    private recentMessagesState: RecentMessagesState
  ) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((data) => {
      this.message = {
        ...this.message,
        ...data,
      };
    });
  }

  getCreateMessageFn() {
    const createMessageFn = () => {
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        return false;
      }
      this.messagesService.createMessage(this.form.value).subscribe({
        next: (message: Message) => this.saveRecentMessage(message),
      });
      return true;
    };

    return createMessageFn.bind(this);
  }

  saveRecentMessage(message: Message) {
    if (message?.id) {
      this.recentMessagesState.pushNewMessage(this.form.value);
    }
  }
}
