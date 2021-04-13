import { Component, OnInit } from '@angular/core';
import { GameService } from "src/app/service/game.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent {

  constructor(public gameService: GameService, public router: Router) {}

  startGame() {
    this.router.navigate(["gameplay"]);

  }
}
