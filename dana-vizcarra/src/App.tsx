import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/pages/home" element={<Home />} />
              <Route path="/pages/about" element={<About />} />
              <Route path="/pages/projects" element={<Projects />} />
              <Route path="/pages/contact" element={<Contact />} />
              {/* Redirect any unknown paths to home */}
              <Route path="*" element={<Navigate to="/pages/home" replace />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
