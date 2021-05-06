import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_services/auth-guard.guard';

import { StartPageComponent } from './start-page/start-page.component';
import { LoginComponent } from './login-page/login.component';
import { SignupComponent } from './signup-page/signup.component';
import { ProfileComponent } from './home-page/profile/profile.component';
import { LeaderboardComponent } from './home-page/leaderboard/leaderboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GameMenuComponent } from './home-page/game-menu/game-menu.component';
import { ConnectFourComponent } from './connect-four/connect-four.component';
import { StartComponent } from "./route/start/start.component";
import { GameplayComponent } from "./route/gameplay/gameplay.component";
import { RankingComponent } from "./route/ranking/ranking.component";
import { MemoryGameComponent } from './memory-components/memory-game/memory-game.component';

const routes: Routes = [
  {
    path: '',
    component: StartPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuard], //Prevent unauthorized access
    children: [
      {
        path: '',
        component: GameMenuComponent //redirect to game menu page by default with path /home
      },
      {
        path: 'profile', // subpath : /home/profile
        component: ProfileComponent
      },
      {
        path: 'leaderboard',
        component: LeaderboardComponent
      }
    ]
  },
  {
    path: 'connect4',
    component: ConnectFourComponent
  },

  { path: "memorygame", redirectTo: "/start", pathMatch: "full" },
  { path: "start", component: StartComponent },
  { path: 'gameplay', component: GameplayComponent },
  { path: 'ranking', component: RankingComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
