import { Card, Suit, Rank } from './Card';

export class Deck {
    drawnCards: Card[] = [];
    availableCards: Card[] = [];

    constructor() {
        for (const suit in Suit) {
            if (isNaN(Number(suit))) {
                continue;
            }
            for (const rank in Rank) {
                if (isNaN(Number(rank))) {
                    continue;
                }
                this.availableCards.push(new Card((Number(rank)+Number(1)),Number(suit)));
            }
        }
    }

    get empty(): boolean{
        return this.availableCards.length===0;
    }

    get lastDrawnCard():Card{
        const {drawnCards}=this;
        return drawnCards[drawnCards.length-1];
    }
    drawCard(): Card{
        const random=Math.floor(Math.random()*this.availableCards.length);
        const drawnCards=this.availableCards.splice(random,1);
        this.drawnCards.push(...drawnCards);
        return drawnCards[0];
    }
}