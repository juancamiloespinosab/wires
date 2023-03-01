import { Component, Input, OnInit } from '@angular/core';
import { IButtonConfig } from '../../interfaces/button.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() config!: IButtonConfig;

  buttonClassList: { [key: string]: string[] } = {
    primary: ['bg-primary', 'text-secondary', 'px-8', 'py-1' ],
    secondary: ['bg-secondary', 'text-primary', 'border', 'border-primary', 'px-8', 'py-1'],
    flat: ['bg-gray', 'text-gray-dark', 'px-8', 'py-1'],
    blur: ['text-gray-dark', 'hover:backdrop-blur-sm', 'hover:bg-gray/50', 'transition-all', 'rounded-xl', 'p-10'],
  };

  constructor() {}

  ngOnInit(): void {}
}
