import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  IButtonConfig,
  ITextInput,
  ITextInputConfig,
} from 'src/app/components/interfaces';
import { Message } from 'src/app/core/models';
import { IMessage } from '../../interfaces';

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
    action: () => console.log(11),
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
    date: new Date(),
    username: 'Juan Espinosa',
  };

  constructor() {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((data) => {
      this.message = {
        ...this.message,
        ...data,
      };
    });
  }
}
