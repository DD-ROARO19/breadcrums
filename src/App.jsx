import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Views/Home';
import Nosotros from './Views/Nosotros';
import Empleados from './Views/Empleados';

function App() {
  const [nav, setNav] = useState(["pagina principal"]);
  const [empList] = useState(Empleados({mode:2}));

  function setActual(pag) {
    let newRuta = nav.slice( 0, nav.indexOf(pag) );
    newRuta = [...newRuta, pag];
    setNav(newRuta);
    // console.log(newRuta);
  }

  function compActual(comp) {
    let last = nav.at((nav.length)-1);
    // console.log(comp);
    // console.log(nav.at((nav.length)-1));
    // console.log(nav.length);
    return last === comp;
  }

  function Ruta() {
    return (
      <div className='navRuteBox'>
        {nav.map( (i, num) => { return <p className='links' key={num} onClick={ () => {setActual(i)} }>{i+" > "}</p> } )}
      </div>
    );
  }

  function Saludo() {
    return (
      <div className='navRuteBox'>
        <div>
          <p> Breadcrums </p>
          <p className='pSmall'> ¡Use los links para ir hacia atras! </p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {nav.length < 2 ? <Saludo/> : <Ruta/> }
      </header>
      <div className='App-content'>
        {compActual(Home({mode:1})) ? <Home fun={setNav} arr={nav} /> : "" }
        {compActual(Nosotros({mode:1})) ? <Nosotros fun={setNav} arr={nav} /> : "" }
        { empList.map( (i) => { 
          return compActual(Empleados({mode:1,id:i})) ? <Empleados id={i} /> : "" 
        } ) }
      </div>
    </div>
  );
}

export default App;
