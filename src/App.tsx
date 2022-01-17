import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Layout/Navbar/Navbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<div>is loading</div>}>
        <Router>
          <Navbar />
          <Home />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
