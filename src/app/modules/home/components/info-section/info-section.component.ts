import { Component, Input, OnInit } from '@angular/core';
import { IInfoSection, IInfoSectionConfig } from '../../interfaces';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.css'],
})
export class InfoSectionComponent implements OnInit {
  @Input() data!: IInfoSection;
  @Input() config!: IInfoSectionConfig;
  @Input() reverse: boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log(22, this.config);
    
  }
}
