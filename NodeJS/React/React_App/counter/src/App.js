import React from 'react';


import './App.css';
import Counter from './Components/counter';
import Header from './Components/Header';
import { CounterProvider } from "./counterContext";
// com o provider eu posso passar dados do componente filho para o pai
function App() {
  return (
    <div className='App'>
      <CounterProvider>
        <Header></Header>
        <Counter></Counter>
      </CounterProvider>
    </div>
  );
}

export default App;
