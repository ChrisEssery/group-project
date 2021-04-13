import { Component } from "@angular/core";
import { GameService } from "src/app/service/game.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent {

  constructor(public gameService: GameService, public router: Router) {}

  startGame() {
    if (this.gameService.playerName && this.gameService.playerName.trim()) {
      this.router.navigate(["gameplay"]);
    }
  }
}
