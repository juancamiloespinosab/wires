import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  title: string = 'Welcome to Wires';
  signUpButton: { text: string; config: IButtonConfig; action: () => void } = {
    action: this.getNavigateFn('auth/sign-up'),
    text: 'Sign Up',
    config: {
      type: 'white-transparent',
    },
  };
  signInButton: { text: string; config: IButtonConfig; action: () => void } = {
    action: this.getSignInFn(),
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
        formControl: this.form.controls['email'],
      },
      config: { type: 'text' },
    },
    {
      data: {
        label: 'Password',
        placeholder: 'Password',
        formControl: this.form.controls['password'],
      },
      config: {
        type: 'password',
      },
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getNavigateFn(target: string) {
    const navigateFn = () => {
      this.router.navigate([target]);
    };

    return navigateFn.bind(this);
  }

  getSignInFn() {
    const signInFn = () => {
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        return false;
      }

      return true;
    };

    return signInFn.bind(this);
  }
}
