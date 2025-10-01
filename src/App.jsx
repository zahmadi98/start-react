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
    <div id="root" className="max-w-[1280px] mx-auto p-8 text-center bg-[#48197a] text-white">
  <Header />
  <main>
    <section
      id="core_concepts"
      className="p-8 rounded-md bg-[#140524] shadow-[0_2px_8px_rgba(0,0,0,0.4)] w-auto text-white"
    >
      <h2 className="text-center">Core Concepts</h2>
      <ul id="test" className="inline-flex flex-row gap-2">
        <CorConcept {...CORE_CONCEPTS[0]} />
        <CorConcept {...CORE_CONCEPTS[1]} />
        <CorConcept {...CORE_CONCEPTS[2]} />
        <CorConcept {...CORE_CONCEPTS[3]} />
      </ul>
    </section>

    <menu id="menu" className="mt-6">
      <button
        id="btn"
        className={`m-2 px-4 py-2 text-white bg-[#140524] ${activeContentIndex === 0 ? "ring-2 ring-blue-400" : ""}`}
        onClick={() => setActiveContentIndex(0)}
      >
        Button 1
      </button>
      <button
        className={`m-2 px-4 py-2 text-white bg-[#140524] ${activeContentIndex === 1 ? "ring-2 ring-blue-400" : ""}`}
        onClick={() => setActiveContentIndex(1)}
      >
        Button 2
      </button>
      <button
        className={`m-2 px-4 py-2 text-white bg-[#140524] ${activeContentIndex === 2 ? "ring-2 ring-blue-400" : ""}`}
        onClick={() => setActiveContentIndex(2)}
      >
        Button 3
      </button>
    </menu>

    <div id="tab_content" className="mt-6">
      <ul>
        {content[activeContentIndex].map((item) => (
          <li
            key={item}
            className="list-none text-start text-black bg-[#434be0aa] border-2 border-[#140524] rounded-md m-2 p-2"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  </main>
</div>
  )
}

export default App;