
// DEPENDENCIES
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as React from 'react';
import Button from '@mui/material/Button';
// PAGES
import Home from './pages/Home';
// FONTS
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// STYLES
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
      </Routes>
    </div>
  );
}

export default App;
