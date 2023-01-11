import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import AssassinsCreed from "./pages/ACPage";
import Contact from "./pages/ContactPage";
// import HomePage from './pages/HomePage';
import Login from "./pages/LoginPage";
import News from "./pages/NovedadesPage";
import ResidentEvil from "./pages/ResidentEvilPage";
import SilentHill from "./pages/SilentHillPage";
import Header from "./components/header"


function App() {

  return (
    <div className = "App">
       {/* <HomePage /> */}
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/assassinscreed" element={<AssassinsCreed />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<News />} />
          <Route path="/residentevil" element={<ResidentEvil />} />
          <Route path="/silenthill" element={<SilentHill />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
