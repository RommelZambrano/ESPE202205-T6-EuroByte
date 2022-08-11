import {
    IconButton,
    Modal,
    Box,
    TextField,
    Button
  } from "@mui/material";
  import React, { useState } from "react";
  import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    alignItems: "center",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "15px",
    boxShadow: "1px 1px 15px #333",
    padding: 4,
  };
  
  const ClientEdit = (props) => {
    const data = props.data;
    const clients = props.clients;
    const handleUpdate = props.handleUpdate;
  
    const [open, setOpen] = useState(false);
    const [formClientValues, setFormClientValues] = useState({
      id: data.id,
      name_client: data.name_client,
      email: data.email,
      CI: data.CI,
      address: data.address,
    });
  
    const [validation, setValidation] = useState({
      auxName_Client: true,
      auxEmail: true,
      auxCI: true,
      auxAddress: true,
    });
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormClientValues({ ...formClientValues, [name]: value });
      console.log(formClientValues);
    };
  
    const nameValidation = () => {
      const name_client = formClientValues.name_client;
      const regexOnlyletters = /^[a-zA-ZáéíóúÁÉÍÓÚ ]+$/;
      const iName = document.getElementById("iName");
  
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
      const regexOnlyletters = /^[a-zA-ZáéíóúÁÉÍÓÚ0-9!"#$%&/()= ]+$/;
      const iAddress = document.getElementById("iAddress");
      const addresss = document.getElementById("address");
      var auxIterator = 0;
  
      if (address === "") {
        iAddress.textContent = "Ingrese la direccion";
  
        auxIterator++;
        setValidation({ ...validation, auxAddress: false });
      }
      if (auxIterator !== 1 && !regexOnlyletters.test(address)) {
        iAddress.textContent = "Solo se permite direcciones validas";
  
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
    const handleSubmitInternal = (e) => {
      e.preventDefault();
  
      if (
        validation.auxName_Client === true &&
        validation.auxEmail === true &&
        validation.auxCI === true &&
        validation.auxAddress === true
      ) {
        handleUpdate(formClientValues);
      } else {
        window.alert("Llene todos los campos correctamente");
      }
    };
  
    const handleOpenModal = () => {
      setOpen(true);
    };
  
    return (
      <>
        <IconButton
          color="secondary"
          aria-label="add an alarm"
          onClick={handleOpenModal}
        >
          <EditOutlinedIcon
            style={{
              color: "black",
            }}
          />
        </IconButton>
  
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={style} id="editClient">
            <form onSubmit={handleSubmitInternal}>
              <h1 align="center">Editar Usuario</h1>
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
              />{" "}
              <i id="iName"></i>
              <TextField
                fullWidth
                id="email"
                name="email"
                placeholder="Correo eléctronico"
                value={formClientValues.email}
                label="Correo eléctronico"
                onChange={handleChange}
                onBlur={emailValidation}
                style={{
                  marginTop: "5%",
                }}
              />
              <i id="iEmail"></i>
              <TextField
                fullWidth
                id="address"
                name="address"
                value={formClientValues.address}
                placeholder="Direccion"
                label="Direccion"
                onChange={handleChange}
                onBlur={addressValidation}
                style={{
                  marginTop: "5%",
                }}
              />
              <i id="iAddress"></i>
              <TextField
                fullWidth
                id="CI"
                name="CI"
                placeholder="Cedula"
                value={formClientValues.CI}
                label="Cedula"
                onChange={handleChange}
                onBlur={cedulaValidation}
                style={{
                  marginTop: "5%",
                }}
              />
              <i id="iCI"></i>
              <Button
                minWidth="0"
                variant="contained"
                size="large"
                type="submit"
                color="primary"
                onClose={() => setOpen(false)}
                sx={{
                  marginTop: "5%",
                  marginLeft: "35%",
                  color: "primary",
                  width: "25%",
                }}
              >
                Editar
              </Button>
            </form>
          </Box>
        </Modal>
      </>
    );
  };
  export default ClientEdit;
  
      const names = document.getElementById("name_client");
      var auxIterator = 0;