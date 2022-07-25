import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import {
  Box,
  TextField,
  Button,
  IconButton, 
  InputLabel
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
  form: {
    backgroundColor: "#1C2833",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "110vh",
  },
  Box: {
    backgroundAttachment: "absolute",
    opacity: 0.93,
    backgroundColor: "#FFFFFF",
    width: "30%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "absolute",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingLeft: "20px",
    paddingRight: "20px",
    background: "#fff",
    borderRadius: "4px",
    boxShadow: "1px 1px 15px #333",
  },
  button: {
    margin: theme.spacing(0.5, 0, 3),
  },
}));

function App(props) {
  const classes = useStyles();
  const users = props.users;
  const handleSubmit = props.handleSubmit;
  const formUserValues = props.formUserValues;
  const setFormUservalues = props.setFormUservalues;
  const [validation, setValidation] = useState({
    auxName_user: false,
    auxEmail: false,
    auxPassword: false
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormUservalues({ ...formUserValues, [name]: value });
  };

  const handleSubmitInternal = (e) => {
    e.preventDefault();

    if (
      validation.auxName_user === true &&
      validation.auxEmail === true &&
      validation.auxPassword === true 
    ) {
      handleSubmit(formUserValues);
      swal.fire(
        {
          title: "Regsitro Exitoso",
          text: "Se ha registrado el usuario",
          icon: "success",
          showCancelButton: false,
          showConfirmButton: false,
        },
        setTimeout(function () {
          window.location.reload(1);
        }, 1250)
      );
    } else {
      swal.fire({
        title: "Llene todo los campos correctamente",
        icon: "warning",
        confirmButtonColor: "#3085d6",
      });
    }
  };

  const handleClickShowPassword = () => {
    setFormUservalues({
      ...formUserValues,
      showPassword: !formUserValues.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const nameValidation = () => {
    const name_user = formUserValues.name_user;
    const regexOnlyletters = /^[a-zA-ZáéíóúÁÉÍÓÚ ]+$/;
    const iName = document.getElementById("iName");
    const names = document.getElementById("name_user");
    var auxIterator = 0;

    if (name_user === "") {
      iName.textContent = "Ingrese el nombre";

      auxIterator++;
      setValidation({ ...validation, auxName_user: false });
    }
    if (auxIterator !== 1 && !regexOnlyletters.test(name_user)) {
      iName.textContent = "Solo se permiten letras";

      auxIterator++;
      setValidation({ ...validation, auxName_user: false });
    }
    if (auxIterator === 0) {
      iName.textContent = "";
      names.style.border = "";
      setValidation({ ...validation, auxName_user: true });
    } else {
      names.style.borderBottom = "2px solid red";
      names.style.borderRadius = "5px";
    }
  };
  const emailValidation = () => {
    const email = formUserValues.email;
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const iEmail = document.getElementById("iEmail");
    const emails = document.getElementById("email");
    var auxIterator = 0;
    var auxExists = false;

    if (email) {
      for (var i = 0; i < users.length; i++) {
        if (users[i].email === email) {
          auxExists = true;
          break;
        }
      }
    }
    if (auxExists === true) {
      iEmail.textContent = "Email ya registrado";
      auxIterator++;
      setValidation({ ...validation, auxEmail: false });
    }
    if (email === "") {
      iEmail.textContent = "Ingrese el correo electrónico";
      auxIterator++;
      setValidation({ ...validation, auxEmail: false });
    }
    if (auxIterator !== 1 && !regexEmail.test(email)) {
      iEmail.textContent = "Ingrese un Email valido";
      auxIterator++;
      setValidation({ ...validation, auxEmail: false });
    }
    if (auxIterator === 0) {
      iEmail.textContent = "";
      emails.style.border = "";
      setValidation({ ...validation, auxEmail: true });
    } else {
      emails.style.borderBottom = "2px solid red";
      emails.style.borderRadius = "5px";
    }
  };

  const passwordValidation = () => {
    const password = formUserValues.password;
    const iPassword = document.getElementById("iPassword");
    const pass = document.getElementById("password");
    var auxIterator = 0;

    if (password === "") {
      iPassword.textContent = "Ingrese la contraseña";
      auxIterator++;
      setValidation({ ...validation, auxPassword: false });
    }

    if (auxIterator !== 1 && password.length < 5) {
      iPassword.textContent = "El Password debe tener al menos 5 digitos";
      auxIterator++;
      setValidation({ ...validation, auxPassword: false });
    }

    if (auxIterator === 0) {
      iPassword.textContent = "";
      pass.style.border = "";
      setValidation({ ...validation, auxPassword: true });
    } else {
      pass.style.borderBottom = "2px solid red";
      pass.style.borderRadius = "5px";
    }
  };

  return (
    <form onSubmit={handleSubmitInternal}>
      <Box className={classes.Box}>
        <br />
        <h1 align="center">REGISTRATE</h1>
        <TextField
          fullWidth
          id="name_user"
          name="name_user"
          value={formUserValues.name_user}
          placeholder="Nombres"
          label="Nombres"
          onChange={handleChange}
          onBlur={nameValidation}
        />     
        <i id="iName"></i>
        <br />
        <TextField
          fullWidth
          id="email"
          name="email"
          placeholder="Correo eléctronico"
          value={formUserValues.email}
          label="Correo eléctronico"
          onChange={handleChange}
          onBlur={emailValidation}
        />
        <i id="iEmail"></i>
        <br />
        <TextField
          fullWidth
          id="password"
          name="password"
          placeholder="Contraseña"
          value={formUserValues.password}
          type={formUserValues.showPassword ? "text" : "password"}
          label="Contraseña"
          onChange={handleChange}
          onBlur={passwordValidation}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {formUserValues.showPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
        <i id="iPassword"></i>
        <InputLabel align="center">
              ¿Ya tienes una cuenta?{" "}
              <a href="/">
                Ingresar
              </a>
              
            </InputLabel>
            <br/>
        <Typography align="center">
          <Button
            minWidth="0"
            variant="contained"
            size="large"
            type="submit"
            color="primary"
          >
            Registrar
          </Button>
          
        </Typography>
        <br />
      </Box>
    </form>
  );
};
export default App;