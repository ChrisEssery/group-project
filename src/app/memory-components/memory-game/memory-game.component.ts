/*
   TO DO: Add game service
*/

import { Component, OnInit } from '@angular/core';
import { GameService } from "src/app/services/game.service";

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.css']
})
export class MemoryGameComponent implements OnInit {

  constructor(public gameService: GameService) {}

  ngOnInit(): void {
  }

}
