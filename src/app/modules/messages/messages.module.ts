import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { CreateComponent } from './pages/create/create.component';
import { MessageComponent } from './components/message/message.component';
import { MeComponent } from './pages/me/me.component';
import { AllComponent } from './pages/all/all.component';
import { MessagesNavComponent } from './components/messages-nav/messages-nav.component';
import { RecentMessagesComponent } from './components/recent-messages/recent-messages.component';
import { CommentComponent } from './components/comment/comment.component';


@NgModule({
  declarations: [
    CreateComponent,
    MessageComponent,
    MeComponent,
    AllComponent,
    MessagesNavComponent,
    RecentMessagesComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    ComponentsModule
  ]
})
export class MessagesModule { }
