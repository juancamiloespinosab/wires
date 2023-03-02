import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IButtonConfig } from 'src/app/components/interfaces/button.interface';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
})
export class LoginRegisterComponent implements OnInit {
  buttons: { config: IButtonConfig; text: string; action: () => void }[] = [
    {
      action: this.getNavigateFn('auth/sign-up'),
      text: 'Sign Up',
      config: {
        type: 'primary',
      },
    },
    {
      action: this.getNavigateFn('auth/sign-in'),
      text: 'Sign In',
      config: {
        type: 'secondary',
      },
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getNavigateFn(target: string) {
    const navigate = () => {
      this.router.navigate([target])
    };

    return navigate.bind(this);
  }
}
