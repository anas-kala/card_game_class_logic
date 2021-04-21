import React, { useState } from 'react';
import './App.css';
import {Game, Guess} from './model/Game';
import {Card} from './components/Card';
import { Card as typeOfCard} from './model/Card';


let game=new Game();

function App(){
  const [finished,setFinished]=useState(false);
  const [lastDrawnCard,setLastDrawnCard]=useState<undefined | typeOfCard>(undefined);
  const[score, setScore]=useState(0);
  
  function handleStartGame(){
    game.drawCard();
    setFinished(game.finished);
    if(game.lastDrawnCard!==undefined)
      setLastDrawnCard(game.lastDrawnCard);
  }

  function handleGuessClick(guess:Guess){
    game.drawCard();
    game.evaluateGuess(guess);
    setScore(game.score);
    setLastDrawnCard(game.lastDrawnCard);
  }

  return (
    <>
    <Card card={lastDrawnCard}/>
    <p>{score}</p>
    {!lastDrawnCard && <button disabled={finished} onClick={handleStartGame}>Start Game</button>}
    {lastDrawnCard && <button disabled={finished} onClick={()=>handleGuessClick(Guess.Loswer)}>Lower</button>}
    {lastDrawnCard && <button disabled={finished} onClick={()=>handleGuessClick(Guess.Higher)}>higher</button>}


    </>
  );
}

export default App;
