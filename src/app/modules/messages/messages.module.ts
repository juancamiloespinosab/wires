import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { CreateComponent } from './pages/create/create.component';
import { MessageComponent } from './components/message/message.component';


@NgModule({
  declarations: [
    CreateComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    ComponentsModule
  ]
})
export class MessagesModule { }
