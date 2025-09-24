import React from 'react';
import reactLogo from './assets/react.svg';
import { useState } from 'react'
import './App.css';
import CorConcept from './components/CoreConcept';
import Header from './components/Header';
import { CORE_CONCEPTS } from './data.js'


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
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
            />
            <CorConcept {...CORE_CONCEPTS[1]} />
            <CorConcept {...CORE_CONCEPTS[2]} />
            <CorConcept {...CORE_CONCEPTS[3]} />
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
            <li className='cases' key={item}>{item}</li>
          ))}
          </ul>
      </div>
      </main>
    </div>
  )
}

export default App;