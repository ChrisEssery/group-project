import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GameplayComponent } from "./route/gameplay/gameplay.component";
import { LeaderboardComponent } from "./route/leaderboard/leaderboard.component";

const routes: Routes = [
  { path: "", redirectTo: "/gameplay", pathMatch: "full" },
  { path: "gameplay", component: GameplayComponent },
  { path: "leaderboard", component: LeaderboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
