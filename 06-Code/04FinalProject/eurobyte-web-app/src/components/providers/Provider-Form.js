import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { Box, TextField, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  Box: {
    backgroundAttachment: "absolute",
    opacity: 0.75,
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
    borderRadius: "15px",
    boxShadow: "1px 1px 15px #333",
  },
  button: {
    margin: theme.spacing(0.5, 0, 3),
  },
}));
const ProviderForm = (props) => {
  const classes = useStyles();
  const handleSubmit = props.handleSubmit;
  const formProviderValues = props.formProviderValues;
  const setFormProviderValues = props.setFormProviderValues;
  const [validation, setValidation] = useState({
    auxName_provider: false,
    auxCity: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormProviderValues({ ...formProviderValues, [name]: value });
  };

  const handleSubmitInternal = (e) => {
    e.preventDefault();

    if (validation.auxName_provider === true && validation.auxCity === true) {
      handleSubmit(formProviderValues);
      swal.fire(
        {
          title: "Registro Exitoso",
          text: "Se ha registrado el proveedor",
          icon: "success",
          showCancelButton: false,
          showConfirmButton: false,
        },
        setTimeout(function () {
          window.location.reload(1);
        }, 1280)
      );
    } else {
      swal.fire({
        title: "Llene todo los campos correctamente",
        icon: "warning",
        confirmButtonColor: "#3085d6",
      });
    }
  };

  const nameProviderValidation = () => {
    const name_provider = formProviderValues.name_provider;
    const regexOnlyletters = /^[a-zA-Z%&/()$%#"!=-_ ]+$/;
    const iProvider = document.getElementById("iProvider");
    const providers = document.getElementById("name_provider");
    var auxIterator = 0;

    if (name_provider === "") {
      iProvider.textContent = "Ingrese el nombre del proveedor";

      auxIterator++;
      setValidation({ ...validation, auxName_provider: false });
    }

    if (auxIterator !== 1 && !regexOnlyletters.test(name_provider)) {
      iProvider.textContent = "Solo se permiten letras";

      auxIterator++;
      setValidation({ ...validation, auxName_provider: false });
    }

    if (auxIterator === 0) {
      iProvider.textContent = "";
      providers.style.border = "";
      setValidation({ ...validation, auxName_provider: true });
    } else {
      providers.style.borderBottom = "2px solid red";
      providers.style.borderRadius = "5px";
    }
  };

  const cityValidation = () => {
    const city = formProviderValues.city;
    const regexOnlyletters = /^[a-zA-Z ]+$/;
    const iCity = document.getElementById("iCity");
    const cities = document.getElementById("city");
    var auxIterator = 0;

    if (city === "") {
      iCity.textContent = "Ingrese la ciudad ";
      auxIterator++;
      setValidation({ ...validation, auxCity: false });
    }

    if (auxIterator !== 1 && !regexOnlyletters.test(city)) {
      iCity.textContent = "Solo se permiten letras";
      auxIterator++;
      setValidation({ ...validation, auxCity: false });
    }

    if (auxIterator === 0) {
      iCity.textContent = "";
      cities.style.border = "";
      setValidation({ ...validation, auxCity: true });
    } else {
      cities.style.borderBottom = "2px solid red";
      cities.style.borderRadius = "5px";
    }
  };
  return (
    <form onSubmit={handleSubmitInternal}>
      <Box className={classes.Box}>
        <br />
        <h1 align="center">Agregar Empresa Proveedor</h1>
        <br />
        <TextField
          fullWidth
          id="name_provider"
          name="name_provider"
          value={formProviderValues.name_provider}
          placeholder="Nombre de la Empresa Proveedor"
          label="Proveedor"
          onChange={handleChange}
          onBlur={nameProviderValidation}
        />
        <i id="iProvider"></i>
        <br />

        <TextField
          fullWidth
          id="city"
          name="city"
          placeholder="Ciudad"
          value={formProviderValues.city}
          label="Ciudad"
          onChange={handleChange}
          onBlur={cityValidation}
        />
        <i id="iCity"></i>
        <br />
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

export default ProviderForm;
