import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IButtonConfig,
  ITextInput,
  ITextInputConfig,
} from 'src/app/components/interfaces';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  title: string = 'Welcome to Wires';
  signUpButton: { text: string; config: IButtonConfig; action: () => void } = {
    action: this.getNavigateFn('auth/sign-up'),
    text: 'Sign Up',
    config: {
      type: 'white-transparent',
    },
  };
  signInButton: { text: string; config: IButtonConfig } = {
    text: 'Sign In',
    config: {
      type: 'white',
    },
  };

  fields: { data: ITextInput; config: ITextInputConfig }[] = [
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
