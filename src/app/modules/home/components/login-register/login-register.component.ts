import { Component, OnInit } from '@angular/core';
import {
  IButtonConfig,
} from 'src/app/components/interfaces/button.interface';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
})
export class LoginRegisterComponent implements OnInit {
  buttons: { config: IButtonConfig; text: string }[] = [
    {
      text: 'Sign Up',
      config: {
        type: 'primary',
      },
    },
    {
      text: 'Log In',
      config: {
        type: 'secondary',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
