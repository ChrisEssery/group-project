import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { StartPageComponent } from './start-page/start-page.component';
import { GameplayComponent } from "./route/gameplay/gameplay.component";
import { LeaderboardComponent } from "./route/leaderboard/leaderboard.component";

const routes: Routes = [
  { path: "", redirectTo: "/startpage", pathMatch: "full"},
  { path: "startpage", component: GameplayComponent },
  { path: "gameplay", component: GameplayComponent },
  { path: "leaderboard", component: LeaderboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
