import { Injectable } from "@angular/core";
import { Cards } from "../cards/card.class";
import { CardService } from "./card.service";
import { LeaderboardService } from "./leaderboard.service";
import { Router } from "@angular/router";

// request dependencies from external source
@Injectable({
  providedIn: "root"
})
export class GameService {
  cards: Cards[] = [];
  activeCards: Cards[] = [];
  isBoardLocked: boolean = false;
  isCheatActivated: boolean = false;
  rounds: number = 0;
  playerName: string;

  constructor(
    private cardService: CardService,
    private leaderboardService: LeaderboardService,
    private router: Router
  ) {
    this.cards = this.cardService.getCards();
  }

  get isGameOver(): boolean {
    return this.cards.every(card => card.visible === true);
  }

  showCard(card: Cards): void {
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

  playAgain(): void {
    this.router.navigate(["playing"]);
    this.cards = this.cardService.getCards();
    this.activeCards = [];
    this.rounds = 0;
    this.isBoardLocked = false;
  }

  // possibly unnecessary option to see cards
  toggleCheat(): void {
    this.isCheatActivated = !this.isCheatActivated;
  }

  // check whether move is valid
  // i.e. unlocked and not gameover
  private isMoveValid(): boolean {
    return !this.isGameOver && !this.isBoardLocked;
  }

  private runRound() {
    this.lockBoard();

    if (this.isMatch()) {
      this.activeCards = [];
      this.unlockBoard();
    } else {
      setTimeout(() => {
        this.hideSelectedCards();
        this.unlockBoard();
      }, 500);
    }

    this.rounds++;
  }

  //check whether card is valid
  private isCardValid(card: Cards): boolean {
    return this.activeCards.length < 2 && !card.visible;
  }

  // locks board
  private lockBoard(): void {
    this.isBoardLocked = true;
  }

  // unlocks board
  private unlockBoard(): void {
    this.isBoardLocked = false;
  }

  // determines whether cards match
  private isMatch(): boolean {
    return this.activeCards[0].id === this.activeCards[1].id;
  }

  private hideSelectedCards(): void {
    this.activeCards[0].hide();
    this.activeCards[1].hide();
    this.activeCards = [];
  }

  private addPlayerInRanking(): void {
    this.leaderboardService.addPlayer({
      name: this.playerName,
      rounds: this.rounds
    });
  }
}
