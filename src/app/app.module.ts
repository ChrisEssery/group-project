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
import { BgmComponent } from './common/bgm/bgm.component';
import { Btngrp1Component } from './start-page/btngrp1/btngrp1.component';
import { LoginComponent } from './login-page/login.component';
import { Title2Component } from './common/title2/title2.component';
import { SignupComponent } from './signup-page/signup.component';
import { ProfileComponent } from './home-page/profile/profile.component';
import { LeaderboardComponent } from './home-page/leaderboard/leaderboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './home-page/navbar/navbar.component';
import { GameMenuComponent } from './home-page/game-menu/game-menu.component';


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
    HomePageComponent,
    NavbarComponent,
    GameMenuComponent
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
