import React from 'react';
import './App.css';
function App() {
  return (
    <>
      <nav className="navbar m-16 flex justify-between items-center" >
        <h1 className='text-3xl font-bold font'>Thrift Spree</h1>
        <ul className="nav-links flex space-x-4">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <h1 className='text-9xl font-bold flex h-full align-middle justify-center'>Thrift Spree</h1>
      </header>
    </>
  );
}

export default App;