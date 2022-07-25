import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import {
  Grid,
  Container,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  CssBaseline,
  FilledInput,
  FormControl,
  InputLabel,
  IconButton,
  InputAdornment
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Login } from "../services/Auth-login";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1C2833",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "110vh",
  },
  container: {
    opacity: "1",
    backgroundColor: "#EAECEE",
    height: "65%",
    marginTop: theme.spacing(12),
    [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
      marginTop: 0,
      width: "100%",
      height: "100%",
    },
  },
  div: {
    marginTop: theme.spacing(9),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    width: "18%",
    height: "10vh",
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(3, 0, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginValues({ ...loginValues, [name]: value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const startSession = (event) => {
    event.preventDefault();
    Login(loginValues);
  };
  
  useEffect(() => {
    if (typeof cookies.get("email") !== "undefined") {
      console.log("type: " + cookies.get("type"));
      if (cookies.get("type") === "1") {
        window.location.href = "./homeAdmin";
      } else if (cookies.get("type") === "2") {
        window.location.href = "./homeEmployed";
      } else if (cookies.get("type") === "3") {
        window.location.href = "./homeClient";
      } else if (cookies.get("type") === "4") {
        window.location.href = "./";
      }
    }
  });

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Container
        component={Paper}
        elevation={5}
        maxWidth="xs"
        className={classes.container}
      >
        <div className={classes.div}>
          <Avatar className={classes.avatar}>
            <Box
              component="img"
              sx={{
                height: 85,
                width: 200,
                maxHeight: { xs: 300, md: 300 },
                maxWidth: { xs: 300, md: 250 },
              }}
              alt="E"
              src="https://img.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=360"
            />
          </Avatar>
          <Typography component="h1" variant="h5" >
            Iniciar Sesion
          </Typography>
          <br />
          <form onSubmit={startSession}>
            <TextField
              fullWidth
              autoFocus
              color="primary"
              margin="small"
              variant="filled"
              label="Email"
              name="email"
              startAdornment={
                <InputAdornment position="start"></InputAdornment>
              }
              size="normal"
              placeholder="Ingrese su Email"
              value={loginValues.email}
              onChange={handleChange}
            />
            <FormControl fullWidth variant="filled" margin="normal">
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-weight"
                name="password"
                type={values.showPassword ? "text" : "password"}
                value={(values.password, loginValues.password)}
                className={handlePasswordChange("password")}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                size="normal"
                placeholder="Ingrese su Contraseña"
              
              />
            </FormControl>
               
            <InputLabel align="center">
              ¿No tienes una cuenta?{" "}
              <a href="/signup">
                Registrate
              </a>
              
            </InputLabel>

            <Typography align="center">
              <Button
                minWidth="0"
                className={classes.button}
                variant="contained"
                size="large"
                type="submit"
                color="primary"
              >
                Ingresar
              </Button>
            </Typography>
            <Typography align="center">
              <link></link>
            </Typography>
          </form>
        </div>
      </Container>
    </Grid>
  );
}

export default App;
