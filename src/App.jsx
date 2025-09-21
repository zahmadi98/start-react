import React from 'react';
import reactLogo from './assets/react.svg';
import { useState } from 'react'
import viteLogo from '/vite.svg';
import './App.css';
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

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return(
    <div id='tabs'>
      <menu>
        <button 
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
         <button 
        className={activeContentIndex === 3 ? "active" : ""}
        onClick={() => setActiveContentIndex(3)}
        >
        Button 4
        </button>
      </menu>
      <div id='tab_content'>
        <ul>
          {content[activeContentIndex].map((item) => (
            <li key={item}>{item}</li>
          ))}
          </ul>
      </div>
    </div>
  )
}
