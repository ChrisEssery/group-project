import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StartComponent } from "./route/start/start.component";
import { GameplayComponent } from "./route/gameplay/gameplay.component";
import { RankingComponent } from "./route/ranking/ranking.component";

const routes: Routes = [
  { path: "", redirectTo: "/start", pathMatch: "full" },
  { path: "start", component: StartComponent },
  { path: 'gameplay', component: GameplayComponent },
  { path: 'ranking', component: RankingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
