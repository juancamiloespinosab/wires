import { Component, OnInit } from '@angular/core';
import {
  IButtonConfig,
  IImage,
  IImageConfig,
} from 'src/app/components/interfaces';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

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
        minWidth: '30px',
      },
    },
  };

  imageButtonList: {
    button: { config: IButtonConfig };
    image: { data: IImage; config: IImageConfig };
  }[] = [];

  iconsBaseUrl: string = 'assets/icon/';
  iconsFormat: string = '.png';
  iconsUrl: { desktop: string; mobile: string | null }[] = [
    { desktop: 'ri_app-store-fill-1', mobile: 'ri_app-store-fill' },
    { desktop: 'Frame 17', mobile: 'Frame 18' },
    { desktop: 'Vector-1', mobile: null },
    { desktop: 'wpf_macos', mobile: 'Vector' },
    {
      desktop: 'material-symbols_desktop-windows-1',
      mobile: 'material-symbols_desktop-windows',
    },
    { desktop: 'mdi_linux', mobile: null },
  ];

  isMobile: boolean = false;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.initBreakpointObserver();

    this.iconsUrl.forEach((iconUrl) => {
      const _iconUrl = this.isMobile ? iconUrl.mobile : iconUrl.desktop;

      if (_iconUrl) {
        const newImageButton = structuredClone(this.imageButtonTemplate);
        newImageButton.image.data.imageUrl = `${this.iconsBaseUrl}${_iconUrl}${this.iconsFormat}`;
        this.imageButtonList.push(newImageButton);
      }
    });
  }

  initBreakpointObserver() {
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((breakpointState: BreakpointState) => {
        this.isMobile = breakpointState.matches;
      });
  }
}
