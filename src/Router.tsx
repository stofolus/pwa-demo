import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home';

export enum ROUTE {
  HOME = '/'
}

export default function Router() {
  return (
    <BrowserRouter>
      <Route path={ROUTE.HOME} exact component={Home} />
    </BrowserRouter>
  )
}
