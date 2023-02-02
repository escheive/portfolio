
// DEPENDENCIES
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as React from 'react';
import Button from '@mui/material/Button';
// PAGES
import Home from './pages/Home';
import Resume from './pages/Resume';
// COMPONENTS
import Header from './Components/Header';
import Footer from './Components/Footer';
// FONTS
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// STYLES
import './App.css';

export default function App() {

  return (

    <div className="App">

      <Header />

      <Routes>

        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/resume'
          element={<Resume />}
        />

      </Routes>

      <Footer />

    </div>

  );
}
