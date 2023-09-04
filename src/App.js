import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import CV from './pages/CV';
import Contact from './pages/Contact';
import './App.css';
import './globalStyles.css';
import LeftColumn from './components/LeftColumn';
import HomePageRightColumn from './components/HomePageRightColumn';

//import RightColumn from './components/RightColumn/RightColumn';

import {
  BrowserRouter,
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <LeftColumn />

        <div className="content-area">
          <Routes>
          <Route path="/" element={<HomePageRightColumn />} />
            <Route path="/about" element={<About />} />
            <Route path="/CV" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
