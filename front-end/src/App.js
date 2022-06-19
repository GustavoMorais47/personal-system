import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Otakupedia from "./pages/otakupedia/otakupedia";
import Customizar from "./pages/customizar/customizar";

function App() {
  return (
    <>
      <header>
        <ul>
          <Link to='/'>Inicio -</Link>
          <Link to='/login'> Login -</Link>
          <Link to='/inicio'> Inicio -</Link>
          <Link to='/otakupedia'> Otakupedia -</Link>
          <Link to='/customizar'> Customizar</Link>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path ='/inicio' element={<Home/>}></Route>
          <Route path ='/login' element={<Login/>}></Route>
          <Route path ='/otakupedia' element={<Otakupedia/>}></Route>
          <Route path ='/customizar' element={<Customizar/>}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
