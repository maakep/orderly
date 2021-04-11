import * as React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Body } from './components/body';
import { Footer } from './components/footer';
import { Header } from './components/Header';
// import ProtectedRoute from './helpers/protected-route';
import { ProvideAuth } from './login/use-auth';

export default function App() {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <Header />
        <Body>
          <Switch>
            <Route exact path={'/'}>
              <div>Start page!</div>
            </Route>
            <Route>
              <div>404 not found :)</div>
            </Route>
          </Switch>
        </Body>
        <Footer />
      </BrowserRouter>
    </ProvideAuth>
  );
}
