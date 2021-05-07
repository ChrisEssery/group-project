/*
   TO DO: Add game service
*/

import { Component, OnInit } from '@angular/core';
import { GameService } from "src/app/games/memory-game/service/game.service";

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.css']
})
export class MemoryGameComponent implements OnInit {

  isFriend: boolean = false;

  constructor(public gameService: GameService) {}

  ngOnInit() {}

  addFriend(e: { preventDefault: () => void; }){
    e.preventDefault()
    this.isFriend = true;
    window.alert('Friend added')
  }

}
