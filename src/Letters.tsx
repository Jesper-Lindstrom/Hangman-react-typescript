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
}

export default function Letters (props: LettersProps) {
  

  const numLettersPerRow = 15;
  const containerWidth = 900;
  const letterWidth = containerWidth / numLettersPerRow;

  const handleLetterClick = (letter: string) => {
    props.onClick(letter);
  };



  return (
  <div className="lettersContainer" style={{ maxWidth: containerWidth}}>
      {letters.map((letter => (
        <div 
        className="letters" 
        key={letter}
        style={{ width: letterWidth, margin: '5px'}}
        onClick={() => handleLetterClick(letter)}
        >
          {letter}
        </div>
        
      )
        ))}
        
  </div>
  )
  
}