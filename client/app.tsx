import * as React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Body } from './components/body';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { SplashScreen } from './components/splash';
import { get } from './helpers/postget';
import { ProvideAuth } from './login/use-auth';

import { ProductsAndCategories } from '../server/product-repo';

export default function App() {
  const [
    productsAndCategories,
    setProductsAndCategories,
  ] = React.useState<ProductsAndCategories>(null);

  React.useEffect(() => {
    const promiseData = get('/data');

    promiseData.then((r) => {
      r.json().then((t: ProductsAndCategories) => {
        setProductsAndCategories(t);
      });
    });
  }, []);

  return productsAndCategories == null ? (
    <SplashScreen />
  ) : (
    <ProvideAuth>
      <BrowserRouter>
        <Header menuItems={productsAndCategories.categories}></Header>
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
