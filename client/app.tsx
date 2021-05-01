import * as React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Body } from './components/body';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { SplashScreen } from './components/splash';
import { get } from './helpers/postget';
import { ProvideAuth } from './login/use-auth';

import { ProductsAndCategories } from '../server/product-repo';
import { CategoryPage } from './pages/category-page';
import { ProductPage } from './pages/product-page';
import { StartPage } from './pages/start-page';
import { NotFound } from './pages/not-found';
import styled from 'styled-components';

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
        <SiteWrapper>
          <Header menuItems={productsAndCategories.categories}></Header>
          <Body>
            <Switch>
              <Route exact path={'/'}>
                <StartPage />
              </Route>
              <Route exact path={'/:category'}>
                <CategoryPage />
              </Route>
              <Route exact path={'/:category/:product'}>
                <ProductPage />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Body>
          <Footer />
        </SiteWrapper>
      </BrowserRouter>
    </ProvideAuth>
  );
}

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
