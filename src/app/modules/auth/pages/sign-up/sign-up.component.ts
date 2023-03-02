import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IButtonConfig,
  ITextInput,
  ITextInputConfig,
} from 'src/app/components/interfaces';
import { UserAuthService } from 'src/app/core/services/http/user-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    fullname: new FormControl('', Validators.required),
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
        formControl: this.form.controls['username'],
      },
      config: { type: 'text' },
    },
    {
      data: {
        label: 'Name',
        placeholder: 'Full name',
        formControl: this.form.controls['fullname'],
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

  constructor(
    private router: Router,
    private userAuthService: UserAuthService
  ) {}

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
      this.userAuthService.signUp(this.form.value).subscribe({
        next: () => this.router.navigate(['auth/sign-in']),
      });
      return true;
    };

    return signUpFn.bind(this);
  }
}
