import "./displayCurrentWord.css";

const possibleWords = [
  "chicken", "stable"
]

export default function DisplayCurrentWord () {
  const currentWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
  const letters = currentWord.split("")

  const letterDivs = letters.map((letter, index) => {
    return <div className="letter" key={index}>{letter.toUpperCase()}</div>
  })
  
  
  return (
    <div className="currentWordContainer">
      <h2>Gissa ordet!</h2>
      <div className="word">{letterDivs}</div>
    </div>
  )
}