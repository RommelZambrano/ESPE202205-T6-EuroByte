import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from './AppBar';
import AppFooter from './AppFooter';
import Typography from '../../static/Typography';
import withRoot from '../withRoot';


function About() {
  return (
    <React.Fragment>
      <AppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h2" gutterBottom marked="center" align="center">
            Acerca de nosotros
          </Typography>
          <Typography variant="h5" gutterBottom marked="center" align="center">
            Somos una empresa que brinda un servicio de registros, compra y venta de productos 
            al por mayor, nacimos con un objetivo y es servirte con lo mejor de lo mejor.
            Nos dedicamos hacer el bien para nuestros clientes y empleados, como empresa hemos nacido 
            para dar sar un buen servicio.
          </Typography>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(About);