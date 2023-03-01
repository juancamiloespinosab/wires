import { Component, OnInit } from '@angular/core';
import { IImage, IImageConfig } from 'src/app/components/interfaces';

@Component({
  selector: 'app-scan-to-download',
  templateUrl: './scan-to-download.component.html',
  styleUrls: ['./scan-to-download.component.css'],
})
export class ScanToDownloadComponent implements OnInit {
  scanImage: { data: IImage; config: IImageConfig } = {
    data: {
      imageUrl: 'assets/icon/pngwing 1.png',
    },
    config: {
      width: '100%',
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
