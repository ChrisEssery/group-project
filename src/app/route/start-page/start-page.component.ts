import { Component, OnInit } from "@angular/core";
import { GameService } from "src/app/service/game.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})

export class StartPageComponent implements OnInit {
   constructor(public gameService: GameService) {}

   ngOnInit() {}
 }
