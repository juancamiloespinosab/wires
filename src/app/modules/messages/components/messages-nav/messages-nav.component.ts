import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IButtonConfig,
  IImage,
  IImageConfig,
} from 'src/app/components/interfaces';
import { ILink } from 'src/app/components/interfaces/link.interface';
import { AuthService } from 'src/app/core/services/app/auth.service';

@Component({
  selector: 'app-messages-nav',
  templateUrl: './messages-nav.component.html',
  styleUrls: ['./messages-nav.component.css'],
})
export class MessagesNavComponent implements OnInit {
  navImageButton: {
    button: { config: IButtonConfig };
    image: { data: IImage; config: IImageConfig };
  } = {
    button: {
      config: {
        type: 'flat',
      },
    },
    image: {
      data: {
        imageUrl: 'assets/icon/menu.png',
      },
      config: {
        width: '30px',
      },
    },
  };

  navImageLinkOptions: {
    label: string;
    link: { data: ILink; action?: () => void };
    image: { data: IImage; config: IImageConfig };
  }[] = [
    {
      label: 'Create Messages',
      link: {
        data: {
          href: '/messages/create',
        },
      },
      image: {
        data: {
          imageUrl: 'assets/icon/create.png',
        },
        config: {
          width: '20px',
        },
      },
    },
    {
      label: 'My Messages',
      link: {
        data: {
          href: '/messages//me',
        },
      },
      image: {
        data: {
          imageUrl: 'assets/icon/send.png',
        },
        config: {
          width: '20px',
        },
      },
    },
    {
      label: 'Se all messages',
      link: {
        data: {
          href: '/messages//all',
        },
      },
      image: {
        data: {
          imageUrl: 'assets/icon/chatbubbles-sharp.png',
        },
        config: {
          width: '20px',
        },
      },
    },
    {
      label: 'Logout',
      link: {
        action: this.getLogOutFn(),
        data: {
          href: '/auth',
        },
      },
      image: {
        data: {
          imageUrl: 'assets/icon/log-in-sharp.png',
        },
        config: {
          width: '20px',
        },
      },
    },
  ];

  showMenu: boolean = false;
  username: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.username = this.authService.getUserData()?.username;
  }

  getLogOutFn() {
    const logOutFn = () => {
      this.authService.LogOut();
    };

    return logOutFn.bind(this);
  }
}
