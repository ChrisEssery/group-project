import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StartLoginComponent } from "./route/start-login/start-login.component";
import { GameplayComponent } from "./route/gameplay/gameplay.component";

const routes: Routes = [
  { path: "", redirectTo: "/start", pathMatch: "full" },
  { path: "start", component: StartLoginComponent },
  { path: "playing", component: GameplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
