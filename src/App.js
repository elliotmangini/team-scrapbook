import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Elliot from './components/Elliot.js';
import Nessa from './components/Nessa.js';

function App() {
  return (
    <BrowserRouter>
    <div className="spacer5"></div>
    <Routes>
      <Route path="/Elliot" element={<Elliot />} />
      <Route path="/Nessa" element={<Nessa />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
