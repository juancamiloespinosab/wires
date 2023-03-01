import { Component, OnInit } from '@angular/core';
import {
  IButtonConfig,
  IImage,
  IImageConfig,
} from 'src/app/components/interfaces';

@Component({
  selector: 'app-os-icons',
  templateUrl: './os-icons.component.html',
  styleUrls: ['./os-icons.component.css'],
})
export class OsIconsComponent implements OnInit {
  imageButtonTemplate: {
    button: { config: IButtonConfig };
    image: { data: IImage; config: IImageConfig };
  } = {
    button: {
      config: {
        type: 'blur',
      },
    },
    image: {
      data: {
        imageUrl: '',
      },
      config: {
        width: '50px',
      },
    },
  };

  imageButtonList: {
    button: { config: IButtonConfig };
    image: { data: IImage; config: IImageConfig };
  }[] = [];

  iconsBaseUrl: string = 'assets/icon/';
  iconsFormat: string = '.png';
  iconsUrl: string[] = [
    'ri_app-store-fill-1',
    'Frame 17',
    'Vector-1',
    'wpf_macos',
    'material-symbols_desktop-windows-1',
    'mdi_linux',
  ];

  constructor() {}

  ngOnInit(): void {
    this.iconsUrl.forEach((iconUrl: string) => {
      const newImageButton = structuredClone(this.imageButtonTemplate);
      newImageButton.image.data.imageUrl = `${this.iconsBaseUrl}${iconUrl}${this.iconsFormat}`;
      this.imageButtonList.push(newImageButton);
    });
  }
}
