import React, { useState } from 'react';
import './App.css';
import { Router } from './Router';
import { User } from './database/UserStorage';

interface ContextState {
  user?: User;
}

interface Context {
  state: ContextState;
  setState: (state: ContextState) => void;
}

const initialContext: Context = {
  state: {},
  setState: () => {}
}

export const ApplicationContext = React.createContext(initialContext);

const App: React.FC = () => {
  const [applicationState, setApplicationState] = useState<ContextState>({})

  return (
    <div className="App">
      <ApplicationContext.Provider value={{state: applicationState, setState: setApplicationState}}>
      <header>
        <h1>PWA Demo</h1>
      </header>
      <Router />
      </ApplicationContext.Provider>
    </div>
  );
}

export default App;
