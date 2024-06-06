import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

function App() {

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/*' element={<Home />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
