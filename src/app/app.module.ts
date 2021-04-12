import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StartLoginComponent } from './route/start-login/start-login.component';
import { GameplayComponent } from './route/gameplay/gameplay.component';
import { MemoryGameComponent } from './memory-components/memory-game/memory-game.component';
import { ButtonComponent } from './memory-components/button/button.component';
import { CardsComponent } from './memory-components/cards/cards.component';
import { HeadingComponent } from './memory-components/heading/heading.component';

@NgModule({
  declarations: [
    AppComponent,
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
