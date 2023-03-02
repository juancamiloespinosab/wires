import { Component, OnInit } from '@angular/core';
import { IImage, IImageConfig } from 'src/app/components/interfaces';
import { ResponsiveService } from 'src/app/core/services/app/responsive.service';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.css'],
})
export class AuthHeaderComponent implements OnInit {
  coverImage: { data: IImage; config: IImageConfig } = {
    data: {
      imageUrl: 'assets/img/image 2.png',
    },
    config: {
      height: this.responsiveService.mobile ? '30vh' : '20vh',
      width: '100vw',
    },
  };

  logoImage: { data: IImage; config: IImageConfig } = {
    data: {
      imageUrl: 'assets/img/Group 2.png',
    },
    config: {
      width: '100%',
    },
  };

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit(): void {}
}
