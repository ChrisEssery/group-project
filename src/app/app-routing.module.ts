import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GameplayComponent } from "./route/gameplay/gameplay.component";
import { LeaderboardComponent } from "./route/leaderboard/leaderboard.component";

const routes: Routes = [
  { path: "", redirectTo: "/playing", pathMatch: "full" },
  { path: "playing", component: GameplayComponent },
  { path: "ranking", component: LeaderboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
