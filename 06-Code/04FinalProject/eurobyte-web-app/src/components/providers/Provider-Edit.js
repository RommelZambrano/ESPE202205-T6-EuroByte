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
  
  const UserEdit = (props) => {
    const data = props.data;
    const handleUpdate = props.handleUpdate;
    const [open, setOpen] = useState(false);
    const [formProviderValues, setFormProviderValues] = useState({
      id: data.id,
      name_provider: data.name_provider,
      city: data.city,
    });
  
    const [validation, setValidation] = useState({
      auxName_provider: true,
      auxCity: true,
    });
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormProviderValues({ ...formProviderValues, [name]: value });
      console.log(formProviderValues);
    };
    const nameProviderValidation = () => {
        const name_provider = formProviderValues.name_provider;
        const regexOnlyletters = /^[a-zA-Z ]+$/;
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
    const handleSubmitInternal = (e) => {
      e.preventDefault();
  
      if (
        validation.auxName_provider === true &&
        validation.auxCity === true 
      ) {
        handleUpdate(formProviderValues);
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
              <h1 align="center">Editar Producto</h1>
              <br />
              <TextField
                fullWidth
                id="name_provider"
                name="name_provider"
                value={formProviderValues.name_provider}
                placeholder="Proveedor"
                label="Proveedor"
                onChange={handleChange}
                onBlur={nameProviderValidation}
              />{" "}
              <i id="iProvider"></i>
              <TextField
                fullWidth
                id="city"
                name="city"
                placeholder="Ciudad"
                value={formProviderValues.city}
                label="Ciudad"
                onChange={handleChange}
                onBlur={cityValidation}
                style={{
                  marginTop: "5%",
                }}
              />
              <i id="iCity"></i>
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
  