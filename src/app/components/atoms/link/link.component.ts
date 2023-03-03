import { Component, Input, OnInit } from '@angular/core';
import { ILink } from '../../interfaces/link.interface';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent implements OnInit {
  @Input() data!: ILink;
  @Input() action!: (() => void) | any;

  constructor() {}

  ngOnInit(): void {}

  clickHandler(event: MouseEvent) {
    if (this.action) {
      this.action();
    }
  }
}
