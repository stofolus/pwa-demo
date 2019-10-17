import React from 'react';
import './App.css';
import { Router } from './Router';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1>PWA Demo</h1>
      </header>
      <Router />
    </div>
  );
}

export default App;
