import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './route/gameplay/background/background.component';
import { CardComponent } from './memory-components/card/card.component';
import { StartComponent } from "./route/start/start.component";
import { LeaderboardComponent } from './route/leaderboard/leaderboard.component';
import { GameplayComponent } from './route/gameplay/gameplay.component';
import { MemoryGameComponent } from './memory-components/memory-game/memory-game.component';
import { GameWindowComponent } from './memory-components/game-window/game-window.component';
import { ButtonComponent } from './memory-components/button/button.component';
import { HeadingComponent } from './memory-components/heading/heading.component';



@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    CardComponent,
    StartComponent,
    LeaderboardComponent,
    GameplayComponent,
    MemoryGameComponent,
    GameWindowComponent,
    ButtonComponent,
    HeadingComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
