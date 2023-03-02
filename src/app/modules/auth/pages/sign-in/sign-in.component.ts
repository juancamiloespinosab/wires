import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IButtonConfig,
  ITextInput,
  ITextInputConfig,
} from 'src/app/components/interfaces';
import { AuthService } from 'src/app/core/services/app/auth.service';
import { UserAuthService } from 'src/app/core/services/http/user-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
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
        label: 'Nickname',
        placeholder: 'Nickname',
        formControl: this.form.controls['username'],
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
    private userAuthService: UserAuthService,
    private authService: AuthService
  ) {}

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
      this.userAuthService.signIn(this.form.value).subscribe({
        next: (res) => {
          this.authService.saveAccessToken(res.access_token);
          this.router.navigate(['messages']);
        },
        error: console.error,
      });
      return true;
    };

    return signInFn.bind(this);
  }
}
