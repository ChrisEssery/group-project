import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { TitleComponent } from './start-page/title/title.component';
import { BackgroundComponent } from './start-page/background/background.component';
import { BgmComponent } from './start-page/bgm/bgm.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    TitleComponent,
    BackgroundComponent,
    BgmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
