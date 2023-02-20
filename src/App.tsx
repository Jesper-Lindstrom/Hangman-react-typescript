import { useState } from 'react';
import './App.css';
import DisplayCurrentWord from './DisplayCurrentWord';
import Letters from './Letters';
import UpdateHangmanImage from './UpdateHangmanImage';

function App() {

  const [currentWord, setCurrentWord] = useState<string>('bäver');

  const hangmanImages = [
    "/public/images/Hangman1.png",
    "/public/images/Hangman2.png",
    "/public/images/Hangman3.png",
    "/public/images/Hangman4.png",
    "/public/images/Hangman5.png",
    "/public/images/Hangman6.png",
    "/public/images/Hangman7.png",
    "/public/images/Hangman8.png",
  ]

  function handleLetterClick(letter: string): void {
    // if(currentWord.includes(letter)) {
    //   setGreenLetters.push(letter);
    // } else {
    //   setRedLetters.push(letter)
    // }
    // om ordet innehåller bokstaven som vi trycker på, gör den grön. Annars röd.
  }

  return (
   <div className="game">
     <h1>Hänga Gubbe!</h1>
     <DisplayCurrentWord onNewWord={setCurrentWord}/>
     <UpdateHangmanImage image={hangmanImages[0]} alt="Hangman 1"/>
     <Letters onClick={handleLetterClick} currentWord={currentWord}/>
   </div>
   
    )
}

export default App


// --- Knappar---
// array med bokstäver CHECK
// for loop skapa divar med bokstäver som knappar CHECK
// bli röd eller grön beroende på om bokstaven fanns i ordet 

// --- Bild ---
// vid fel - uppdatera bild


// --- Ordet ---
// skapa array med olika ord
// slumpa ord
// skapa tomma rutor för ordets längd
