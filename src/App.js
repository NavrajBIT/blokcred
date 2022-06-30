
import './App.css';
import Navbar from './components/Navbar/Navbar';
import React from 'react';  
import ReactDOM from 'react-dom';  
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'  
import Create from './components/Create/Create';
import Buy from './components/Buy/Buy';
import Sell from './components/Sell/Sell';
import Institution from './components/Institution/Institution';
import View from './components/View/View';
import BlockCred from './components/BlockCred/BlockCred';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
            <Route path="/create" element={<Create/>} /> 
            <Route path="/buy" element={<Buy/>} /> 
            <Route path="/sell" element={<Sell/>} /> 
            <Route path="/institution" element={<Institution/>} /> 
            <Route path="/view" element={<View/>} /> 
            <Route path="/" element={<BlockCred  />} /> 
            <Route path="/blockcred" element={<BlockCred  />} /> 




        </Routes>
      </div>
    </Router>
  );
}

export default App;
