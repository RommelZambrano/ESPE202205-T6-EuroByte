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
    borderRadius: "15px",
    boxShadow: "1px 1px 15px #333",
  },
  button: {
    margin: theme.spacing(0.5, 0, 3),
  },
}));
const ClientForm = (props) => {
  const classes = useStyles();
  const clients = props.clients;
  const handleSubmit = props.handleSubmit;
  const formClientValues = props.formClientValues;
  const setFormClientValues = props.setFormClientValues;
  const [validation, setValidation] = useState({
    auxName_Client: false,
    auxEmail: false,
    auxCI: false,
    auxAddress: true,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormClientValues({ ...formClientValues, [name]: value });
  };

  const handleSubmitInternal = (e) => {
    e.preventDefault();

    if (
      validation.auxName_Client === true &&
      validation.auxEmail === true &&
      validation.auxCI === true &&
      validation.auxAddress === true
    ) {
      handleSubmit(formClientValues);
      swal.fire(
        {
          title: "Registro Exitoso",
          text: "Se ha registrado el cliente",
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

  const nameValidation = () => {
    const name_client = formClientValues.name_client;
    const regexOnlyletters = /^[a-zA-ZáéíóúÁÉÍÓÚ ]+$/;
    const iName = document.getElementById("iName");
    const names = document.getElementById("name_client");
    var auxIterator = 0;

    if (name_client === "") {
      iName.textContent = "Ingrese el nombre";

      auxIterator++;
      setValidation({ ...validation, auxName_Client: false });
    }
    if (auxIterator !== 1 && !regexOnlyletters.test(name_client)) {
      iName.textContent = "Solo se permiten letras";

      auxIterator++;
      setValidation({ ...validation, auxName_Client: false });
    }
    if (auxIterator === 0) {
      iName.textContent = "";
      names.style.border = "";
      setValidation({ ...validation, auxName_Client: true });
    } else {
      names.style.borderBottom = "2px solid red";
      names.style.borderRadius = "5px";
    }
  };
  const emailValidation = () => {
    const email = formClientValues.email;
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const iEmail = document.getElementById("iEmail");
    const emails = document.getElementById("email");
    var auxIterator = 0;
    var auxExists = false;

    if (email) {
      for (var i = 0; i < clients.length; i++) {
        if (clients[i].email === email) {
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

  const cedulaValidation = () => {
    const CI = formClientValues.CI;
    const regexOnlyNumbers = /^0$|^[1-9]\d*$|^\.\d+$|^0\.\d*$|^[1-9]\d*\.\d*$/;
    const iCI = document.getElementById("iCI");
    const cedula = document.getElementById("CI");
    var auxIterator = 0;
    var auxExists = false;

    if (CI) {
      for (var i = 0; i < clients.length; i++) {
        if (clients[i].CI === CI) {
          auxExists = true;
          break;
        }
      }
    }
    if (auxExists === true) {
      iCI.textContent = "Cedula ya registrada";
      auxIterator++;
      setValidation({ ...validation, auxCI: false });
    }
    if (CI === "") {
      iCI.textContent = "Ingrese la cedula";
      auxIterator++;
      setValidation({ ...validation, auxCI: false });
    }
    if (auxIterator !== 1 && !regexOnlyNumbers.test(CI)) {
      iCI.textContent = "Ingrese una Cedula valida";
      auxIterator++;
      setValidation({ ...validation, auxCI: false });
    }
    if (auxIterator === 0) {
      iCI.textContent = "";
      cedula.style.border = "";
      setValidation({ ...validation, auxCI: true });
    } else {
      cedula.style.borderBottom = "2px solid red";
      cedula.style.borderRadius = "5px";
    }
  };
  const addressValidation = () => {
    const address = formClientValues.address;
    const regexOnlyletters = /^[a-zA-ZáéíóúÁÉÍÓÚ0-9!"#$%&/()ñ=.,;_+-|° ]+$/;
    const iAddress = document.getElementById("iAddress");
    const addresss = document.getElementById("address");
    var auxIterator = 0;

    if (address === "") {
      iAddress.textContent = "Ingrese la direccion del su domilio";

      auxIterator++;
      setValidation({ ...validation, auxAddress: false });
    }
    if (auxIterator !== 1 && !regexOnlyletters.test(address)) {
      iAddress.textContent = "Ingrese una direccion valida";

      auxIterator++;
      setValidation({ ...validation, auxAddress: false });
    }
    if (auxIterator === 0) {
      iAddress.textContent = "";
      addresss.style.border = "";
      setValidation({ ...validation, auxAddress: true });
    } else {
      addresss.style.borderBottom = "2px solid red";
      addresss.style.borderRadius = "5px";
    }
  };
  return (
    <form onSubmit={handleSubmitInternal}>
      <Box className={classes.Box}>
        <br />
        <h1 align="center">Agregar Cliente</h1>
        <br />
        <TextField
          fullWidth
          id="name_client"
          name="name_client"
          value={formClientValues.name_client}
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
          value={formClientValues.email}
          label="Correo eléctronico"
          onChange={handleChange}
          onBlur={emailValidation}
        />
        <i id="iEmail"></i>
        <br />
        <TextField
          fullWidth
          id="CI"
          name="CI"
          placeholder="Cedula"
          value={formClientValues.CI}
          label="Cedula"
          onChange={handleChange}
          onBlur={cedulaValidation}
        />
        <i id="iCI"></i>
        <br />
        <TextField
          fullWidth
          id="address"
          name="address"
          value={formClientValues.address}
          placeholder="Direccion"
          label="Direccion"
          onChange={handleChange}
          onBlur={addressValidation}
        />
        <i id="iAddress"></i>
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

export default ClientForm;