import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';

import HomePage from './pages/HomePage';
import REPage from './pages/ResidentEvilPage';
import FFPage from './pages/FinalFantasyPage';
import SHPage from './pages/SilentHillPage';
import ContactoPage from './pages/ContactPage';
import ACPage from './pages/ACPage';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/residentevil" element={<REPage />} />
          <Route path="/silenthill" element={<SHPage />} />
          <Route path="/contact" element={<ContactoPage />} />
          <Route path="/assassinscreed" element={<ACPage />} />
          <Route path="/finalfantasy7" element={<FFPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
