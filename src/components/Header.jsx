import reactImg from '../assets/react-icons.svg';
import '../App.css';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  return (
    <header>
      <img className="mx-auto w-12 h-12 mt-3" src={reactImg} alt="Stylized" />
     <h1>React Esentials</h1>
     <p className='des'>
      {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are going yo build!
     </p>
    </header>
  );
}