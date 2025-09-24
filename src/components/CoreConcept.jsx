export default function CorConcept(props){
  return(
    <li>
      <img className="logo" src={props.image} alt={props.title}/>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  )
}