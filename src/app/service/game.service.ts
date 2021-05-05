// Contains gameplay logic for
// memory game and adding players
// to leaderboard.

import { Injectable } from "@angular/core";
import { Card } from "../cards/card.class";
import { CardService } from "./card.service";
import { RankingService } from "./ranking.service";
import { Router } from "@angular/router";

// Request dependencies from external source
@Injectable({
  providedIn: "root"
})
export class GameService {
  cards: Card[] = [];
  activeCards: Card[] = [];
  isBoardLocked: boolean = false;
  rounds: number = 0;
  playerName: string;
  isCheatActivated: boolean = false;

  constructor(
    private cardService: CardService,
    private leaderboardService: RankingService,
    private router: Router
  ) {
    this.cards = this.cardService.getCards();
  }

  // Determines when game has finished
  get isGameOver(): boolean {
    return this.cards.every(cards => cards.visible === true);
  }

  // When card is clicked, flip 180
  // revealing the other side
  showCard(card: Card): void {
    if (!this.isMoveValid()) return;

    if (this.isCardValid(card)) {
      this.activeCards.push(card);
      card.show();
    }

    if (this.activeCards.length === 2) {
      this.runRound();
    }

    if (this.isGameOver) {
      this.addPlayerInRanking();
    }
  }
  // Once gameplay is complete,
  // start again
  playAgain(): void {
    this.router.navigate(["gameplay"]);
    this.cards = this.cardService.getCards();
    this.activeCards = [];
    this.rounds = 0;
    this.isBoardLocked = false;
  }

  toggleCheat(): void {
    this.isCheatActivated = !this.isCheatActivated;
  }

  // Check whether move is valid
  // i.e. unlocked and not gameover
  private isMoveValid(): boolean {
    return !this.isGameOver && !this.isBoardLocked;
  }

  private runRound() {
    this.lockBoard();
    // If there is a match,
    // keep cards showing
    if (this.isMatch()) {
      this.activeCards = [];
      this.unlockBoard();
    }
    else {
      setTimeout(() => {
        this.hideSelectedCards();
        this.unlockBoard();
      }, 500);
    }

    this.rounds++;
  }

  // Checks whether card is in correct
  // format
  private isCardValid(card: Card): boolean {
    return this.activeCards.length < 2 && !card.visible;
  }

  // Locks board
  private lockBoard(): void {
    this.isBoardLocked = true;
  }

  // Unlocks board
  private unlockBoard(): void {
    this.isBoardLocked = false;
  }

  // Determines whether cards match
  private isMatch(): boolean {
    return this.activeCards[0].id === this.activeCards[1].id;
  }

  // Hides cards so they are facing
  // down
  private hideSelectedCards(): void {
    this.activeCards[0].hide();
    this.activeCards[1].hide();
    this.activeCards = [];
  }

  // Adds new player and number
  // of rounds to the leaderboard
  private addPlayerInRanking(): void {
    this.leaderboardService.addPlayer({
      name: this.playerName,
      rounds: this.rounds
    });
  }
}
