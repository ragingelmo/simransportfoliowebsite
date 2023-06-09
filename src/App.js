import React from 'react';
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import "./pageStyles/Navbar.css";
import "./pageStyles/Home.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>



  </div>
  );


    
}

export default App;
