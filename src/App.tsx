import React, { useState } from 'react';
import './App.css';
import {Game} from './model/Game';
import {Card} from './components/Card';
import { Card as typeOfCard} from './model/Card';


let game=new Game();

function App(){
  const [finished,setFinished]=useState(false);
  const [lastDrawnCard,setLastDrawnCard]=useState<undefined | typeOfCard>(undefined);
  
  function handleDrawCard(){
    console.log(game.drawCard());
    setFinished(game.finished);
    if(game.lastDrawnCard!==undefined)
      setLastDrawnCard(game.lastDrawnCard);
  }

  return (
    <>
    <Card card={lastDrawnCard}/>
    <button disabled={finished} onClick={handleDrawCard}>Draw Card</button>
    </>
  );
}

export default App;
