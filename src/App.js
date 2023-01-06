import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import Elliot from './components/Elliot.js';
import Nessa from './components/Nessa.js';
import Navigator from './components/Navigator.js';
import React from 'react';

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Navigator />} />
          <Route path="/Elliot" element={<Elliot />} />
          <Route path="/Nessa" element={<Nessa />} />
        </Routes>
    </>
  );
}

export default App;
