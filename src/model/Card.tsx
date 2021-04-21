export enum Rank{
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
}

export enum Suit{
    Clubs,
    Diamonds,
    Hearts,
    Spades,
}

export class Card{
    rank:Rank;
    suit:Suit;

    constructor(rank:Rank,suit:Suit){
        this.rank=rank;
        this.suit=suit;
    }
}