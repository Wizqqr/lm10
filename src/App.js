import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import { HavbarHeader } from './components/Navbar/HavbarHeader';
import { Main } from './pages/Main/Main.jsx';
import {Product} from './pages/Product/Product.jsx';
import {About} from './pages/About/About.jsx'


function App() {
  return (
    <div className="app">
      <Router>
        <HavbarHeader/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;