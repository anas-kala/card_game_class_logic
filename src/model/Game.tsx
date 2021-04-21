import { Deck } from './Deck';
import { Card } from './Card';

export enum Guess {
    Loswer,
    Higher
}
export class Game {
    deck: Deck = new Deck();
    score = 0;

    get finished(): boolean {
        return this.deck.empty;
    }

    get lastDrawnCard(): Card {
        return this.deck.lastDrawnCard;
    }

    get secondLastDrawnCard(): Card {
        return this.deck.secondLastDrawnCard;
    }

    drawCard(): Card {
        return this.deck.drawCard();
    }

    increaseScore() {
        this.score += 1;
    }

    evaluateGuess(guess: Guess): number {
        const { lastDrawnCard, secondLastDrawnCard } = this.deck;

        if ((guess === Guess.Loswer && lastDrawnCard.rank < secondLastDrawnCard.rank) ||
            (guess === Guess.Higher && lastDrawnCard.rank > secondLastDrawnCard.rank)) {
            this.increaseScore();
        }

        return this.score;
    }
}