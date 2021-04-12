import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
/*import { RouterModule } from '@angular/router';*/
import { AppComponent } from './app.component';
import { CardsComponent } from './memory-components/cards/cards.component';
import { LeaderboardComponent } from './route/leaderboard/leaderboard.component';
import { GameplayComponent } from './route/gameplay/gameplay.component';
import { MemoryGameComponent } from './memory-components/memory-game/memory-game.component';
import { GameWindowComponent } from './memory-components/game-window/game-window.component';
import { ButtonComponent } from './memory-components/button/button.component';
import { HeadingComponent } from './memory-components/heading/heading.component';



@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    LeaderboardComponent,
    GameplayComponent,
    MemoryGameComponent,
    GameWindowComponent,
    ButtonComponent,
    HeadingComponent
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
