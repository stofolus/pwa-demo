import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { RegistrationDone } from './pages/RegistrationDone';
import { Login } from './pages/Login';

export enum ROUTE {
  HOME = '/',
  REGISTER = '/register',
  REGISTER_DONE = '/register/done',
  LOGIN = '/login'
}

export function Router() {
  return (
    <BrowserRouter>
      <Route path={ROUTE.HOME} exact component={Home} />
      <Route path={ROUTE.REGISTER} exact component={Register} />
      <Route path={ROUTE.REGISTER_DONE} exact component={RegistrationDone} />
      <Route path={ROUTE.LOGIN} exact component={Login} />
    </BrowserRouter>
  )
}
