export default function CorConcept(props) {
  return (
    <li className="flex flex-col items-center space-y-3 list-none text-start border-2 border-[#434be0aa] rounded-md m-2 p-2">
      <img className="mt-2 w-20 h-20 logo transition hover:drop-shadow-[0_0_2em_#61dafbaa]" src={props.image} alt={props.title} />
      <h2 className="text-center">{props.title}</h2>
      <p className="text-center text-sm">{props.description}</p>
    </li>
  );
}
