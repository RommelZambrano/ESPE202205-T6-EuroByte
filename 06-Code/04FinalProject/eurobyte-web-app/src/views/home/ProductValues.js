import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../../static/Typography';
import SavingsIcon from '@mui/icons-material/Savings';
import CategoryIcon from '@mui/icons-material/Category';
import StarIcon from '@mui/icons-material/Star';
const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 15, display: 'flex', position: 'relative' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} md={4}>
            <Box sx={item}>
              <CategoryIcon/>
              <Typography variant="h6" sx={{ my: 5 }}>
                Variedad de productos
              </Typography>
              <Typography variant="h5">
                {
                  'Disponemos de una variedad de productos que estan listos para ti.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} my="center">
            <Box sx={item}>
             <SavingsIcon/>
              <Typography variant="h6" sx={{ my: 5 }}>
                Precios economicos
              </Typography>
              <Typography variant="h5">
                
                {
                  'Tenemos precios accesibles para todos, con buenos descuentos.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Box sx={item}>
              <StarIcon/>
              <Typography variant="h6" sx={{ my: 5 }}>
                Productos de buena calidad
              </Typography>
              <Typography variant="h5">
                {
                  'Nuestros productos son naturales, porque pensamos en la tu salud.'
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;