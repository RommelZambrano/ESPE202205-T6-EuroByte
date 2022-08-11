import * as React from 'react';
import ProductCategories from '../views/home/ProductCategories';
import ProductSmokingHero from '../views/home/ProductSmokingHero';
import AppFooter from '../views/home/AppFooter';
import ProductHero from '../views/home/ProductHero';
import ProductValues from '../views/home/ProductValues';
import ProductCTA from '../views/home/ProductCTA';
import AppBar from '../views/home/AppBar';
import withRoot from '../views/withRoot';

function Index() {
  return (
    <React.Fragment>
      <AppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);