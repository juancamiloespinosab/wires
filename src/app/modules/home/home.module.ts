import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { ScanToDownloadComponent } from './components/scan-to-download/scan-to-download.component';
import { OsIconsComponent } from './components/os-icons/os-icons.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    LandingComponent,
    InfoSectionComponent,
    LoginRegisterComponent,
    ScanToDownloadComponent,
    OsIconsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule
  ]
})
export class HomeModule { }
