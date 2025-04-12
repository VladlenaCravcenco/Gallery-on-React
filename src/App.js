
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function Home() {
  return <h2>Главная</h2>;
}

function About() {
  return <h2>О проекте</h2>;
}

function App() {
  return (
    <HashRouter>
      <div className="App">
        <HeaderBlock /> {/* <-- ОБЯЗАТЕЛЬНО здесь */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;