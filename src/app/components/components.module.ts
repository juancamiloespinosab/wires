import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ButtonComponent } from './atoms/button/button.component';
import { TextInputComponent } from './atoms/text-input/text-input.component';
import { HeaderComponent } from './organisms/header/header.component';
import { NavComponent } from './molecules/nav/nav.component';
import { ImageComponent } from './atoms/image/image.component';


@NgModule({
  declarations: [
    ButtonComponent,
    TextInputComponent,
    HeaderComponent,
    NavComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [
    ButtonComponent,
    TextInputComponent,
    HeaderComponent,
    NavComponent,
    ImageComponent
  ]
})
export class ComponentsModule { }
