import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import { UserdataService } from './userdata.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { TitleComponent } from './start-page/title/title.component';
import { BackgroundComponent } from './start-page/background/background.component';
import { BgmComponent } from './bgm/bgm.component';
import { Btngrp1Component } from './start-page/btngrp1/btngrp1.component';
import { LoginComponent } from './login/login.component';
import { Title2Component } from './title2/title2.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MenuPageComponent } from './menu-page/menu-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    TitleComponent,
    BackgroundComponent,
    BgmComponent,
    Btngrp1Component,
    LoginComponent,
    Title2Component,
    SignupComponent,
    ProfileComponent,
    LeaderboardComponent,
    MenuPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
