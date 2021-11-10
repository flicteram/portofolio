import React from 'react'
import './App.css';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      
  );
}

export default App;
