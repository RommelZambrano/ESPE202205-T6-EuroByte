import * as React from 'react';
import  Login  from '../components/Auth-login';
import AppBar from '../views/home/AppBar';
import AppFooter from '../views/home/AppFooter';
import withRoot from '../views/withRoot';


function About() {
  return (
    <React.Fragment>
      <AppBar />
      <Login />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(About);