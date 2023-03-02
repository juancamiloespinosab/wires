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

  buttonClassList: { [key: string]: string[] } = {
    primary: ['bg-primary', 'text-secondary', 'px-8', 'py-1', 'rounded-md'],
    secondary: [
      'bg-secondary',
      'text-primary',
      'border',
      'border-primary',
      'px-8',
      'py-1',
      'rounded-md',
    ],
    'white-transparent': [
      'text-primary',
      'border',
      'border-white',
      'px-8',
      'py-1',
      'rounded-3xl',
    ],
    white: [
      'bg-white',
      'text-secondary',
      'border',
      'border-white',
      'px-8',
      'py-1',
      'rounded-3xl',
    ],
    flat: ['text-gray-dark'],
    blur: [
      'text-gray-dark',
      'hover:backdrop-blur-sm',
      'hover:bg-gray/50',
      'transition-all',
      'rounded-xl',
      'p-10',
    ],
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
