import React from 'react';
import './App.css';
import Todo from './features/counter/Todo';
import { Routes, Route } from "react-router-dom";
import About from './features/counter/About';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo/>} />
        <Route exact path="/about/:index" element={<About />} />
      </Routes>
      
    </div>
  );
}

export default App;
