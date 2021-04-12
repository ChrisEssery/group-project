import { Component, OnInit } from '@angular/core';
import { Cards } from "src/app/cards/card.class";
import { GameService } from "src/app/service/game.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() card: Cards;

  constructor(public gameService: GameService) {}

  ngOnInit(): void {
  }

}
