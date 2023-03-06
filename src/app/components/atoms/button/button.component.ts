import { Component, Input, OnInit } from '@angular/core';
import { IButtonConfig } from '../../interfaces/button.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() config!: IButtonConfig;
  @Input() action!: () => void;

  buttonClassList: { [key: string]: string } = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    'white-transparent': 'button-white-transparent',
    white: 'button-white',
    'white-small': 'button-white-small',
    flat: 'button-text-gray-dark',
    blur: 'button-button-blur',
  };

  constructor() {}

  ngOnInit(): void {}

  clickHandler(event: MouseEvent) {
    event.preventDefault();
    if (this.action) {
      this.action();
    }
  }
}
