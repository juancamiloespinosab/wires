import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  form: FormGroup = new FormGroup({
    nickName: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  title: string = 'Welcome to Wires';
  signInButton: { text: string; config: IButtonConfig; action: () => void } = {
    action: this.getNavigateFn('auth/sign-in'),
    text: 'Sign In',
    config: {
      type: 'white-transparent',
    },
  };
  createButton: { text: string; config: IButtonConfig; action: () => void } = {
    action: this.getSignUpFn(),
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
        formControl: this.form.controls['nickName'],
      },
      config: { type: 'text' },
    },
    {
      data: {
        label: 'Name',
        placeholder: 'Full name',
        formControl: this.form.controls['name'],
      },
      config: { type: 'text' },
    },
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
    const navigate = () => {
      this.router.navigate([target]);
    };

    return navigate.bind(this);
  }

  getSignUpFn() {
    const signUpFn = () => {
      if (this.form.invalid) {
        this.form.markAllAsTouched();

        return false;
      }

      return true;
    };

    return signUpFn.bind(this);
  }
}
