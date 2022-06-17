import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Otakupedia from "./pages/otakupedia/otakupedia";

function App() {
  return (
    <>
      <header>
        <ul>
          <Link to='/'>Inicio -</Link>
          <Link to='/login'> Login -</Link>
          <Link to='/home'> Home -</Link>
          <Link to='/otakupedia'> Otakupedia</Link>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path ='/home' element={<Home/>}></Route>
          <Route path ='/login' element={<Login/>}></Route>
          <Route path ='/otakupedia' element={<Otakupedia/>}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
