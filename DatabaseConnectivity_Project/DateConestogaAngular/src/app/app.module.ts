import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { DatePadComponent } from './date-pad/date-pad.component';
import { DateServiceService } from './date-service.service';
import { LoginComponent } from './login/login.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { FindMatchComponent } from './find-match/find-match.component'
import { APP_BASE_HREF} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    DatePadComponent,
    LoginComponent,
    ManageProfileComponent,
    FindMatchComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    DateServiceService,
    {
      provide : APP_BASE_HREF,
      useValue : '/'
    }
  ],
  bootstrap: [DatePadComponent]
})
export class AppModule { }
