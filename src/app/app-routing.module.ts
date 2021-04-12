import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { StartLoginComponent } from "./route/start-login/start-login.component";

const route: Route = [
  { path: "", redirectTo: "/start-login", pathMatch: "full" },
  { path: "start-login", component: StartLoginComponent },
   { path: "playing", component: GamePlayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
