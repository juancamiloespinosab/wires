import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  IButtonConfig,
  ITextInput,
  ITextInputConfig,
} from 'src/app/components/interfaces';
import { AuthService } from 'src/app/core/services/app/auth.service';
import { IMessageComment } from '../../interfaces';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input() data!: IMessageComment;
  username: string = '';

  sendButton: { text: string; config: IButtonConfig; action: () => void } = {
    action: () => {},
    text: 'Send',
    config: {
      type: 'white-small',
    },
  };

  commentInput: { data: ITextInput; config: ITextInputConfig } = {
    data: {
      label: '',
      placeholder: '',
      formControl: new FormControl(''),
    },
    config: {
      type: 'text',
    },
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.username = this.authService.getUserData()?.username;
  }
}
