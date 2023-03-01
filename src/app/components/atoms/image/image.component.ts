import { Component, Input, OnInit } from '@angular/core';
import { IImage, IImageConfig } from '../../interfaces';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() data!: IImage;
  @Input() config: IImageConfig = {
    width: 'full'
  };

  constructor() { }

  ngOnInit(): void {
    console.log(33, this.data, this.config);
    
  }

}
