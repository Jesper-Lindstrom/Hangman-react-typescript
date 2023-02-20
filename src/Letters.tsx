import "./letters.css";

const letters:  string[] = [
 'A', 'B', 'C', 'D', 'E',
 'F', 'G', 'H', 'I', 'J', 
 'K', 'L', 'M', 'N', 'O', 
 'P', 'Q', 'R', 'S', 'T', 
 'U','V', 'W', 'X', 'Y', 
 'Z', 'Å', 'Ä', 'Ö'
];

interface LettersProps {
  onClick: (letter: string) => void;
  currentWord: string;
  greenLetters: string[];
  redLetters: string[];
}

export default function Letters(props: LettersProps) {
  const { currentWord } = props;

  const numLettersPerRow = 15;
  const containerWidth = 900;
  const letterWidth = containerWidth / numLettersPerRow;

  const handleLetterClick = (letter: string) => {
    props.onClick(letter);
  };

  const letterCounts: { [letter: string]: number } = {};
  for (const letter of currentWord) {
    if (letterCounts[letter]) {
      letterCounts[letter]++;
    } else {
      letterCounts[letter] = 1;
    }
  }

  return (
    <div className="lettersContainer" style={{ maxWidth: containerWidth }}>
      {letters.map((letter: string) => {
        const count = letterCounts[letter] || 0;
        const isLetterInWord = count > 0;
        const isLetterUsed = count === 0;
        return (
          <div
            className="letters"
            key={letter}
            style={{
              width: letterWidth,
              margin: "5px",
              backgroundColor: 
                props.greenLetters.includes(letter)
                ? "green"
                : props.redLetters.includes(letter)
                ? "red"
                : "white",
            }}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </div>
        );
      })}
    </div>
  )
}