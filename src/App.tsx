import React from 'react';
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div>
      <Header />
      <Content />
      <div className="container-fluid">
        <p className='fs-1'>In Development...</p>
      </div>
    </div>
  );
}

export default App;
