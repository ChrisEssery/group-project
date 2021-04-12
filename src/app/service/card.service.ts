import { Injectable } from "@angular/core";
import { Cards } from "../cards/card.class";
import { CARDS_IMAGES_PATHS } from "../card-path/images.config";

@Injectable({
  providedIn: "root"
})

export class CardService {
  constructor() {}

  // get cards and place them on memory game board
  getCards(): Cards[] {
    const cards = [];

    for (let i = 0; i < CARDS_IMAGES_PATHS.length; i++) {
      cards.push(new Cards(i, CARDS_IMAGES_PATHS[i]));
      cards.push(new Cards(i, CARDS_IMAGES_PATHS[i]));
    }

    this.shuffleArray(cards);

    return cards;
  }

  private shuffleArray(elements: any[]): void {
    for (let i = elements.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [elements[i], elements[j]] = [elements[j], elements[i]];
    }
  }
}
