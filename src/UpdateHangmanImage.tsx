
interface Props {
  image: string;
  alt: string;
}



export default function UpdateHangmanImage(props: Props) {
  return (
    <div>
    <img src={props.image} alt={props.alt}/>
    </div>
  )
}