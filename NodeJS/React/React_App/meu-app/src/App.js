// import Header from './Header'
// import Counter from "./CounterClass.js";
import { useEffect, useState } from 'react';
import './App.css';
import Counter from './CounterFunction.js';

function App() {
  const [show, setShow] = useState(true);
  let time = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      time += 1;
      console.log(time);
      if (time > 5) {
        clearInterval(timer);
        setShow(false);
      }
    }, 1000);
  }, [time]);

  if (show) {
    return (
      <div>
        <Counter count={12}></Counter>
      </div>
    );
  }
  return (
    <div>
      Sem contador
    </div>
  );

  //   return (
  //     // Posso criar tags com react
  //     // Posso personalizar o nome e os links para usar esse header em outros projetos
  //     <div>
  //       {/* <Header name="José" links={["Sobre", "Comprar", "Contato"]}></Header> */}
  //       {/* <Counter count={12}></Counter> */}
  //     </div>

  //   );
}

export default App;
