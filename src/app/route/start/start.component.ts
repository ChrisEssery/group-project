import { Component, OnInit } from '@angular/core';
import { GameService } from "src/app/service/game.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})

// Logic for start page passed to gameservice.
export class StartComponent {
  constructor(public gameService: GameService, public router: Router) {}

  // Game starts one the player has entered
  // his/her name
  startGame() {
    if (this.gameService.playerName && this.gameService.playerName.trim()) {
      this.router.navigate(["gameplay"]);
    }
  }
}
