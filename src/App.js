import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

const ab = useState

function App() {

  //COMUNICAÇÃO SEM REDUX 
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(10)

  return (
    <div className="App">
      <h1>Exercício React-Redux</h1>
    <div className='linha'>
        <Intervalo min={min} max={max}
          onMinChanged={setMin} onMaxChanged={setMax}></Intervalo>   
    </div>
    <div className='linha'>
      <Media min={min} max={max}></Media>
      <Soma min={min} max={max}></Soma>
      <Sorteio min={min} max={max}></Sorteio>
    </div>
  </div>
  
  );
}

export default App;
