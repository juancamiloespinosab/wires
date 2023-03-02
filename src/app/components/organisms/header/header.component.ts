import { Component, OnInit } from '@angular/core';
import { IImage, IImageConfig } from '../../interfaces/image.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logo: { data: IImage; config: IImageConfig } = {
    data: {
      imageUrl: 'assets/img/Group 2.png',
    },
    config: {
      maxWidth: '60%',
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
