import { useState } from 'react';
import './App.css';
import DisplayCurrentWord from './DisplayCurrentWord';
import Letters from './Letters';
import UpdateHangmanImage from './UpdateHangmanImage';

function App() {

  const possibleWords = [
    "bäver", "björn", "staket"
  ]

  

  const [currentWord, setCurrentWord] = useState<string>(possibleWords[Math.floor(Math.random() * possibleWords.length)]);
  const [greenLetters, setGreenLetters] = useState<string[]>([]);
  const [redLetters, setRedLetters] = useState<string[]>([]);
  const [showHangmanIndex, setShowHangManIndex] = useState<number>(0)

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
  if (currentWord.includes(letter)) {
      setGreenLetters((greenLetters) => [...greenLetters, letter])
    } else {
      setRedLetters((redLetters) => [...redLetters, letter])
      setShowHangManIndex(getNextHangManIndex());
    }
    // om ordet innehåller bokstaven som vi trycker på, gör den grön. Annars röd.
  }

  function getNextHangManIndex () {
    return showHangmanIndex+1;
  }

  return (
   <div className="game">
     <h1>Hänga Gubbe!</h1>
     <DisplayCurrentWord currentWord={currentWord}/>
     <UpdateHangmanImage image={hangmanImages[0]} alt="Hangman 1"/>
     <Letters 
     onClick={handleLetterClick} 
     currentWord={currentWord}
     greenLetters={greenLetters}
     redLetters={redLetters}
     />
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
