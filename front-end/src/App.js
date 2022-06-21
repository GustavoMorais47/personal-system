import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/settings' component={Settings}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
