import React from 'react';
import reactLogo from './assets/react.svg';
import { useState } from 'react'
import reactImg from './assets/react.svg';
import './App.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
const content = [
[
  "a",
  "b",
  "c",
  "d"
],
[
  "1",
  "2",
  "3",
  "4"
],
[
  "e",
  "f",
  "g",
  "h"
],
[
  "5",
  "6",
  "7",
  "8"
]
];
function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized" />
     <h2>React Esentials</h2>
     <p>
      {reactDescriptions[genRandomInt(2)]} React concepts
     </p>
    </header>
  );
}

function CorConcept(props){
  return(
    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.descripyion}</p>
    </li>
  )
}
function App() {
  
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return(
    <div id='tabs'>
      <Header />
      <main>
        <section id='core_concepts'>
          <h2>Core Concepts</h2>
          <ul id='test'>
            <CorConcept 
            title="Components"
            descripyion="The core UI building block."
            image={reactImg}
            />
            <CorConcept 
            title="Components"
            descripyion="The core UI building block."
            image={reactImg}
            />
            <CorConcept 
            title="Components"
            descripyion="The core UI building block."
            image={reactImg}
            />
            <CorConcept 
            title="Components"
            descripyion="The core UI building block."
            image={reactImg}
            />
          </ul>
        </section>

      <menu id='menu'>
        <button id='btn'
        className={activeContentIndex === 0 ? "active" : ""}
        onClick={() => setActiveContentIndex(0)}
        >
        Button 1  
        </button>
         <button 
        className={activeContentIndex === 1 ? "active" : ""}
        onClick={() => setActiveContentIndex(1)}
        >
        Button 2
        </button>
         <button 
        className={activeContentIndex === 2 ? "active" : ""}
        onClick={() => setActiveContentIndex(2)}
        >
        Button 3
        </button>
      </menu>
      <div id='tab_content'>
        <ul>
          {content[activeContentIndex].map((item) => (
            <li key={item}>{item}</li>
          ))}
          </ul>
      </div>
      </main>
    </div>
  )
}

export default App;