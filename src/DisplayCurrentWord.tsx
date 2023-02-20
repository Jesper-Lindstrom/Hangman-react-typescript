import "./displayCurrentWord.css";

interface DisplayCurrentWordProps {
 currentWord:string;
}



export default function DisplayCurrentWord (props: DisplayCurrentWordProps) {
  const letters = props.currentWord.split("")

  const letterDivs = letters.map((letter: string, index) => {
    return <div className="currentWordLetters" key={index}>{letter.toUpperCase()}</div>
  })
  
  
  return (
    <div className="currentWordContainer">
      <h2>Gissa ordet!</h2>
      <div className="word">{letterDivs}</div>
    </div>
  )
}



  





