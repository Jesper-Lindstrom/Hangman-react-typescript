import "./displayCurrentWord.css";

interface DisplayCurrentWordProps {
  onNewWord: (word: string) => void;
}

const possibleWords = [
  "bäver", "björn", "staket"
]

export default function DisplayCurrentWord (props: DisplayCurrentWordProps) {
  const currentWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
  const letters = currentWord.split("")

  const letterDivs = letters.map((letter: string, index) => {
    return <div className="letter" key={index}>{letter.toUpperCase()}</div>
  })
  
  props.onNewWord(currentWord)
  
  return (
    <div className="currentWordContainer">
      <h2>Gissa ordet!</h2>
      <div className="word">{letterDivs}</div>
    </div>
  )
}



  





