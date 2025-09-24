import reactImg from '../assets/react-icons.svg';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  return (
    <header>
      <img className="logo" src={reactImg} alt="Stylized" />
     <h2>React Esentials</h2>
     <p>
      {reactDescriptions[genRandomInt(2)]} React concepts
     </p>
    </header>
  );
}