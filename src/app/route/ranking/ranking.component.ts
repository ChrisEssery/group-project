import { Component, OnInit } from "@angular/core";
import { RankingService } from "src/app/service/ranking.service";
import { GameService } from "src/app/service/game.service";

@Component({
  selector: "app-ranking",
  templateUrl: "./ranking.component.html",
  styleUrls: ["./ranking.component.css"]
})
export class RankingComponent implements OnInit {
  constructor(
    public rankingService: RankingService,
    public gameService: GameService
  ) {}

  ngOnInit() {}
}
