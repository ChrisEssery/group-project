import { Component, OnInit } from '@angular/core';
import { GameService } from "src/app/service/game.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
})
export class GameplayComponent implements OnInit {
   constructor(public gameService: GameService) {}

   ngOnInit() {}

}
