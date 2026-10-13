import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Home from './pageRoutes/Home';
import Experience from './pageRoutes/Experience';
import Skills from './pageRoutes/Skills';
import Projects from './pageRoutes/Projects';
import Contacts from './pageRoutes/Contacts';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router basename="/portfolio">
      <ScrollToTop />
      <div className="App bg-stone-200 text-gray-900 flex flex-col min-h-screen font-sans">
        
        <Navbar />
        
        <main className="flex-grow flex flex-col relative">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            
            <Route path="/home" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </main>
        
        <Footer /> 
        
      </div>
    </Router>
  );
}

export default App;