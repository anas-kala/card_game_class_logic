import React from 'react';
import {Card as CardType, Suit} from '../model/Card';

type Props={
    card:CardType | undefined,
}

export const Card=({card}:Props)=>{
    if(!card){
        return null;
    }
    const suit=card.suit===Suit.Clubs?
    'Clubs'
        :card.suit===Suit.Hearts?
            'Hearts'
                :card.suit===Suit.Spades?
                'Spades'
                :'Diamonds';

    return(
        <h1>{card.rank} of {suit}</h1>
    );
}

