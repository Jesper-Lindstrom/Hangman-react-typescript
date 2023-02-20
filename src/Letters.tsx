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
  greenLetters: string[];
  redLetters: string[];
}

export default function Letters (props: LettersProps) {
  const { currentWord, greenLetters, redLetters } = props; // Oklart
  

  const numLettersPerRow = 15;
  const containerWidth = 900;
  const letterWidth = containerWidth / numLettersPerRow;

  const handleLetterClick = (letter: string) => {
    const isLetterInWord = currentWord.includes(letter);
    props.onClick(letter);
  };



  return (
  <div className="lettersContainer" style={{ maxWidth: containerWidth}}>
      {letters.map((letter: string) => (
  <div 
    className="letters" 
    key={letter}
    style={{ 
      width: letterWidth, 
      margin: '5px', 
      backgroundColor: greenLetters.includes(letter) ? 'green' : redLetters.includes(letter) ? 'red' : 'white' 
    }}
    onClick={() => handleLetterClick(letter)}
  >
    {letter}
  </div>
))}
        
  </div>
  )
  
}