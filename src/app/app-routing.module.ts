import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from "./route/start-login/start-login.component";

const routes: Routes = [];const routes: Routes = [
  { path: "", redirectTo: "/start-login", pathMatch: "full" },
  { path: "start-login", component: StartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
