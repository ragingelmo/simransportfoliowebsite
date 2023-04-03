import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/projects" element={<Projects />} />
          <Route path = "/experience" element={<Experience />} />
          <Route path = "/contact" element={<Contact />} />

        </Routes>
      </Router>



  </div>
  );


    
}

export default App;
