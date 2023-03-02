import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from '../../interfaces';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  @Input() data!: IMessage;

  constructor() {}

  ngOnInit(): void {}
}
