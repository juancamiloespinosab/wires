import { Component, OnInit } from '@angular/core';
import { IInfoSection, IInfoSectionConfig } from '../../interfaces';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  sections: { data: IInfoSection; config: IInfoSectionConfig }[] = [
    {
      data: {
        title: 'Create a message to share with your friends',
        subtitle: 'Create your first message following the first step:',
        phoneImage: {
          data: {
            imageUrl: 'assets/mobile/Samsung Galaxy S20 5G-3.png',
          },
          config: {
            width: '100%',
          },
        },
        descriptionList: [
          {
            image: {
              data: {
                imageUrl: 'assets/img/Fashion blogging-pana 2.png',
              },
              config: {
                width: '400px',
              },
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, error. Provident corporis id aspernatur sit atque, accusamus.',
          },
          {
            image: {
              data: {
                imageUrl: 'assets/img/Connected world-pana 1.png',
              },
              config: {
                width: '400px',
              },
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, error. Provident corporis id aspernatur sit atque, accusamus.',
          },
        ],
      },
      config: {
        reverse: false,
      },
    },
    {
      data: {
        title: 'Create a message to share with your friends',
        subtitle: 'Create your first message following the first step:',
        phoneImage: {
          data: {
            imageUrl: 'assets/mobile/Samsung Galaxy S20 5G.png',
          },
          config: {
            width: '100%'
          },
        },
        descriptionList: [
          {
            image: {
              data: {
                imageUrl: 'assets/img/Fashion blogging-pana 2.png',
              },
              config: {
                width: '400px',
              },
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, error. Provident corporis id aspernatur sit atque, accusamus.',
          },
          {
            image: {
              data: {
                imageUrl: 'assets/img/Connected world-pana 1.png',
              },
              config: {
                width: '400px',
              },
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, error. Provident corporis id aspernatur sit atque, accusamus.',
          },
        ],
      },
      config: {
        reverse: true,
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
