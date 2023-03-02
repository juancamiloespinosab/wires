import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './atoms/button/button.component';
import { TextInputComponent } from './atoms/text-input/text-input.component';
import { HeaderComponent } from './organisms/header/header.component';
import { NavComponent } from './molecules/nav/nav.component';
import { ImageComponent } from './atoms/image/image.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonComponent,
    TextInputComponent,
    HeaderComponent,
    NavComponent,
    ImageComponent,
    MainLayoutComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    ButtonComponent,
    TextInputComponent,
    HeaderComponent,
    NavComponent,
    ImageComponent,
    MainLayoutComponent
  ],
})
export class ComponentsModule {}
