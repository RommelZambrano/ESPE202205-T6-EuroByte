import {
  IconButton,
  Modal,
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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

const UserEdit = (props) => {
  const data = props.data;
  const users = props.users;
  const handleUpdate = props.handleUpdate;

  const [open, setOpen] = useState(false);
  const [formUserValues, setFormUservalues] = useState({
    id: data.id,
    name_user: data.name_user,
    email: data.email,
    password: data.password,
    type: data.type,
  });

  const [validation, setValidation] = useState({
    auxName_user: true,
    auxEmail: true,
    auxPassword: true,
    auxType: true,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormUservalues({ ...formUserValues, [name]: value });
    console.log(formUserValues);
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
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
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
      emails.style.align = "center";
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

  const modificationType = () => {
    const type = formUserValues.type;
    const typeSelect = document.getElementById("type");
    const iType = document.getElementById("iType");
    if (type === 0) {
      iType.textContent = "Ingrese el tipo de usuario";
      typeSelect.style.borderBottom = "2px solid red";
      typeSelect.style.borderRadius = "5px";
      setValidation({ ...validation, auxType: false });
    } else {
      iType.textContent = "";
      typeSelect.style.border = "";
    }
  };
  const handleSubmitInternal = (e) => {
    e.preventDefault();

    if (
      validation.auxName_user === true &&
      validation.auxEmail === true &&
      validation.auxPassword === true &&
      validation.auxType === true
    ) {
      handleUpdate(formUserValues);
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
        <Box sx={style} id="editUser">
          <form onSubmit={handleSubmitInternal}>
            <h1 align="center">Editar Usuario</h1>
            <br />
            <TextField
              fullWidth
              id="name_user"
              name="name_user"
              value={formUserValues.name_user}
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
              value={formUserValues.email}
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
              id="password"
              name="password"
              placeholder="Contraseña"
              value={formUserValues.password}
              type="password"
              label="Contraseña"
              onChange={handleChange}
              onBlur={passwordValidation}
              style={{
                marginTop: "5%",
              }}
            />
            <i id="iPassword"></i>
            <FormControl
              fullWidth
              style={{
                marginTop: "5%",
              }}
            >
              <InputLabel id="labelTypeUser">Tipo de Usuario</InputLabel>
              <Select
                fullWidth
                labelId="labelTypeUser"
                id="type"
                name="type"
                value={formUserValues.type}
                label="Tipo de usuario"
                onChange={handleChange}
                onBlur={modificationType}
              >
                <MenuItem disabled selected>
                  Seleccione un tipo{" "}
                </MenuItem>
                <MenuItem value={2}>Vendedor</MenuItem>
                <MenuItem value={3}>Cliente</MenuItem>
              </Select>
            </FormControl>
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
export default UserEdit;
