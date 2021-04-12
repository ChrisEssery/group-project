import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { TitleComponent } from './start-page/title/title.component';
import { BackgroundComponent } from './start-page/background/background.component';
import { BgmComponent } from './start-page/bgm/bgm.component';
import { MemoryGameComponent } from './memory-components/memory-game/memory-game.component';
import { StartLoginComponent } from './route/start-login/start-login.component';
import { ButtonComponent } from './memory-components/button/button.component';
import { CardsComponent } from './memory-components/cards.component';
import { HeadingComponent } from './heading/heading.component';
import { GameplayComponent } from './gameplay/gameplay.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    TitleComponent,
    BackgroundComponent,
    BgmComponent,
    MemoryGameComponent,
    StartLoginComponent,
    ButtonComponent,
    CardsComponent,
    HeadingComponent,
    GameplayComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
