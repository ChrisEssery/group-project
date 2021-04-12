import { Component, OnInit } from '@angular/core';
import { GameService } from "src/app/service/game.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-start-login',
  templateUrl: './start-login.component.html',
  styleUrls: ['./start-login.component.css']
})
export class StartLoginComponent {
  constructor(public gameService: GameService, public router: Router) {}

  startGame() {
    if (this.gameService.playerName && this.gameService.playerName.trim()) {
      this.router.navigate(["playing"]);
   }
 }
}
