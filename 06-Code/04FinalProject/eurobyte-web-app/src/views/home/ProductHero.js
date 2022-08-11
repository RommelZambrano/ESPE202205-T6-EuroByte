import * as React from 'react';
import Button from '../../static/Button';
import Typography from '../../static/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://media.istockphoto.com/photos/empty-wood-table-top-on-shelf-in-supermarket-blurred-background-picture-id1002918320?k=20&m=1002918320&s=170667a&w=0&h=dqo2HdxU2QqsSBr0UsbVn4EpDp-NHDl6Yu_enzTItfQ=';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Bienvenido a Eurobyte Store
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Disfruta de nuestra variedad de prductos de calidad con precios economicos.
      </Typography>
      <Button
        variant="contained"
        size="large"
        component="a"
        href="/signup"
        sx={{ minWidth: 200,  backgroundColor: "#17202A" }}
      >
        Registrarse
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Disfruta de nuestra variedad de productos
      </Typography>
    </ProductHeroLayout>
  );
}