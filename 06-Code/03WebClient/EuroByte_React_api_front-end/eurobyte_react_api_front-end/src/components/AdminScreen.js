import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  mainFeatured: {
    height: "20%",
    color: theme.palette.common.black,
    marginBottom: theme.spacing(7),
    opacity: 0.7,
    backgroundColor: null,
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  mainFeaturedContent: {
    position: "center",
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(8),
      paddingRight: 0,
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        component="main"
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "70vh" }}
        className={classes.mainFeatured}
      >
        <Grid item md={6} className={classes.mainFeaturedContent}>
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            Eurobyte Store
          </Typography>
          <Typography variant="h6" color="inherit" paragraph>
            Nosotros somos Eurobyte Store una aplicacion diseñada para el
            registro y venta de productos.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
export default App;
