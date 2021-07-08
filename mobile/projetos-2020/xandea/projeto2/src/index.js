import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Exchange from './pages/Exchange/IndexExchange';
import SignIn from './pages/Login/SignIn';
import Registro from './pages/Registro/Registro.js';
import HomePage from './pages/Home/HomePage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/login"  component={SignIn} />
      <Route path="/registro"  component={Registro} />
      <Route path="/exchange" component={Exchange} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
