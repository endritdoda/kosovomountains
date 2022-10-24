import React from 'react';
import './App.css';
import {BrowserRouter , Routes , Route,} from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar';
import {menu} from './utils/DummyData';
import Footer from './components/Footer';
import Gjeravica from './pages/Gjeravica';
import Maja from './pages/Maja';



function App() {
  return (
    <BrowserRouter>
     <Navbar menuItems={menu}/>
    <Routes>
      <Route path='/' to element={<Header/>}/>
      <Route path='/mali1' to element={<Gjeravica/>}/>
      <Route path='/mali2' to element={<Maja/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
