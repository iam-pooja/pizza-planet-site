import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/menu' element={<Menu />} />
         <Route path='/about' element={<About />} />
         <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
