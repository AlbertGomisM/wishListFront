import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Router } from './routes/Router';
import { Auth0Provider } from '@auth0/auth0-react';
import TodosProvider from './context/TodosProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <Auth0Provider
  domain="dev-y3dn7j43z0iubs7v.us.auth0.com"
  clientId="DOJ1IcMeCuT0ICpJDzukHcUKNzqHnzqC"
  authorizationParams={{
    redirect_uri: window.location.origin + "/home"
  }}
  >
    <TodosProvider>
      
      <Router />

    </TodosProvider>
  </Auth0Provider>

);


