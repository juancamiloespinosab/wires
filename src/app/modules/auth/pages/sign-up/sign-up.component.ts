import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IButtonConfig,
  ITextInput,
  ITextInputConfig,
} from 'src/app/components/interfaces';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  title: string = 'Welcome to Wires';
  signInButton: { text: string; config: IButtonConfig; action: () => void } = {
    action: this.getNavigateFn('auth/sign-in'),
    text: 'Sign In',
    config: {
      type: 'white-transparent',
    },
  };
  createButton: { text: string; config: IButtonConfig } = {
    text: 'Create',
    config: {
      type: 'white',
    },
  };

  fields: { data: ITextInput; config: ITextInputConfig }[] = [
    {
      data: {
        label: 'Nickname',
        placeholder: 'Nickname',
      },
      config: { type: 'text' },
    },
    {
      data: {
        label: 'Name',
        placeholder: 'Full name',
      },
      config: { type: 'text' },
    },
    {
      data: {
        label: 'Email Address',
        placeholder: 'example@mail.com',
      },
      config: { type: 'text' },
    },
    {
      data: {
        label: 'Password',
        placeholder: 'Password',
      },
      config: {
        type: 'password',
      },
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getNavigateFn(target: string) {
    const navigate = () => {
      this.router.navigate([target]);
    };

    return navigate.bind(this);
  }
}
