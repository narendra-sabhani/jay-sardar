import React from 'react';
import './App.scss';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  console.log(window.location);
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
