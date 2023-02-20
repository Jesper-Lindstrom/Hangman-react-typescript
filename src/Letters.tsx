import { useState } from 'react';
import "./letters.css";

const letters:  string[] = [
 'A', 'B', 'C', 'D', 'E',
 'F', 'G', 'H', 'I', 'J', 
 'K', 'L', 'M', 'N', 'O', 
 'P', 'Q', 'R', 'S', 'T', 
 'U','V', 'W', 'X', 'Y', 
 'Z', 'Å', 'Ä', 'Ö'
];

interface LettersProps  {
  onClick: (letter: string) => void;
  currentWord: string;
}

export default function Letters (props: LettersProps) {
  const { currentWord } = props; // Oklart
  const [greenLetters, setGreenLetters] = useState<string[]>([]);
  const [redLetters, setRedLetters] = useState<string[]>([]);

  const numLettersPerRow = 15;
  const containerWidth = 900;
  const letterWidth = containerWidth / numLettersPerRow;

  const handleLetterClick = (letter: string) => {
    const isLetterInWord = letter.includes(letter);
    if (isLetterInWord) {
      setGreenLetters((greenLetters) => [...greenLetters, letter])
    } else {
      setRedLetters((redLetters) => [...redLetters, letter])
    }
    props.onClick(letter);
  };



  return (
  <div className="lettersContainer" style={{ maxWidth: containerWidth}}>
      {letters.map((letter: string) => (
  <div 
    className="letters" 
    key={letter}
    style={{ width: letterWidth, margin: '5px', backgroundColor: currentWord.includes(letter) ? 'green' : 'red'}}
    onClick={() => handleLetterClick(letter)}
  >
    {letter}
  </div>
))}
        
  </div>
  )
  
}