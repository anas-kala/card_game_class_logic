import {Deck} from './Deck';
import {Card} from './Card';

export class Game{
    deck: Deck=new Deck();
    
    get finished():boolean{
        return this.deck.empty;
    }

    get lastDrawnCard():Card{
        return this.deck.lastDrawnCard;
    }

    drawCard():Card{
        return this.deck.drawCard();
    }
}