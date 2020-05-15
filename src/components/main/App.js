import React from 'react';
import './app.css'

import 'font-awesome/css/font-awesome.min.css'

import Nav from '../template/nav/Nav' 
import Intro from '../template/intro/Intro' 
import Investimento from '../template/investimento/Investimento' 
import Vantagens from '../template/vantagens/Vantagens' 
import Depoimento from '../template/depoimento/Depoimento' 
import Login from '../template/login/Login';
import Rodape from '../template/Rodape/Escuro/Escuro';

function App() {
  return (
    <div className="App">
        <Nav />
        <Intro />
        <Investimento />
        <Vantagens />
        <Depoimento />
        <Login />
        <Rodape />
    </div>
  );
}

export default App;
