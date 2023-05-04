import './App.css';
import { Router } from './routes/Router';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  <Auth0Provider
  domain="dev-y3dn7j43z0iubs7v.us.auth0.com"
  clientId="DOJ1IcMeCuT0ICpJDzukHcUKNzqHnzqC"
  authorizationParams={{
    redirect_uri: window.location.origin + "/home"
  }}
  >
    <Router />
  </Auth0Provider>
}

export default App;
