import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, AuthHeaderComponent],
  imports: [CommonModule, AuthRoutingModule, ComponentsModule, ReactiveFormsModule],
})
export class AuthModule {}
