import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Negado from './components/AcessoNegado.js';
import Assistir from './components/Assistir.js';
import Aula from './components/Aula.js';
import Aulas from "./components/Aulas.js";
import Home from "./components/Home.js";
import Nav from "./components/Nav";
import PrivateRoute from './components/privateRoute.js';
import Sobre from "./components/Sobre.js";
import ContextLogin from './context/contextLogin.js';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <ContextLogin>
      <Router>
        <div className="App">
          <GlobalStyle />
            <Nav />
            <div className='content'>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route element={<PrivateRoute />}>
                  <Route path='/aulas' element={<Aulas />} />
                </Route>
                <Route exact path='/aulas/:id' element={<Aula />}/>
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/assistir' element={<Assistir />}/>
                <Route path='*' element={<h1>Essa rota não existe</h1>} />
                <Route path='/negado' element={<Negado />} />
                
              </Routes>
            </div>
        </div>
      </Router>
    </ContextLogin>
  );
}

export default App;
