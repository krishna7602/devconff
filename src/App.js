// import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Sponsors from './components/Sponsors.js';
import Location from './components/Location.js';
import Registration from './components/Registration.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Sponsors/>
    <Location/>
    <Registration/>
    <Footer/>
    </>
  );
}

export default App;
