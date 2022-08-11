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

const ProdutEdit = (props) => {
  const data = props.data;
  const providers = props.providers;
  const handleUpdate = props.handleUpdate;
  const [open, setOpen] = useState(false);
  const [formProductValues, setFormProductvalues] = useState({
    id: data.id,
    name_product: data.name_product,
    description: data.description,
    provider_ID: data.provider_ID,
    quantity: data.quantity,
    price: data.price,
  });

  const [validation, setValidation] = useState({
    auxName_product: true,
    auxDescription: true,
    auxProvider_ID: true,
    auxQuantity: true,
    auxPrice: true,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormProductvalues({ ...formProductValues, [name]: value });
    console.log(formProductValues);
  };

  const nameValidation = () => {
    const name_product = formProductValues.name_product;
    const regexOnlyletters = /^[a-zA-ZáéíóúÁÉÍÓÚ]+$/;
    const iName = document.getElementById("iName");
    const names = document.getElementById("name_product");
    var auxIterator = 0;

    if (name_product === "") {
      iName.textContent = "Ingrese el nombre del producto";
      auxIterator++;
      setValidation({ ...validation, auxName_product: false });
    }
    if (auxIterator !== 1 && !regexOnlyletters.test(name_product)) {
      iName.textContent = "Solo se permiten letras";
      auxIterator++;
      setValidation({ ...validation, auxName_product: false });
    }
    if (auxIterator === 0) {
      iName.textContent = "";
      names.style.border = "";
      setValidation({ ...validation, auxName_product: true });
    } else {
      names.style.borderBottom = "2px solid red";
      names.style.borderRadius = "5px";
    }
  };

  const descriptionValidation = () => {
    const description = formProductValues.description;
    const iDescription = document.getElementById("iDescription");
    const descriptions = document.getElementById("description");
    var auxIterator = 0;

    if (description === "") {
      iDescription.textContent = "Ingrese la marca del producto";
      auxIterator++;
      setValidation({ ...validation, auxDescription: false });
    }
    if (auxIterator === 0) {
      iDescription.textContent = "";
      descriptions.style.border = "";
      setValidation({ ...validation, auxDescription: true });
    } else {
      descriptions.style.borderBottom = "2px solid red";
      descriptions.style.borderRadius = "5px";
    }
  };

  const providerValidation = () => {
    const provider_ID = formProductValues.provider_ID;
    const iProviderID = document.getElementById("iProviderID");
    const providers = document.getElementById("provider_ID");
    var auxIterator = 0;
    if (provider_ID === "") {
      iProviderID.textContent = "Ingrese la empresa proveedor";
      auxIterator++;
      setValidation({ ...validation, auxProvider_ID: false });
    }
    if (auxIterator === 0) {
      iProviderID.textContent = "";
      providers.style.border = "";
      setValidation({ ...validation, auxProvider_ID: true });
    } else {
      providers.style.borderBottom = "2px solid red";
      providers.style.borderRadius = "5px";
    }
  };

  const quantityValidation = () => {
    const quantity = formProductValues.quantity;
    const regexOnlyNumbers = /^0$|^[1-9]\d*$|^\.\d+$|^0\.\d*$|^[1-9]\d*\.\d*$/;
    const iQuantity = document.getElementById("iQuantity");
    const quantities = document.getElementById("quantity");
    var auxIterator = 0;

    if (quantity === "") {
      iQuantity.textContent = "Ingrese el cantidad";
      auxIterator++;
      setValidation({ ...validation, auxQuantity: false });
    }
    if (!regexOnlyNumbers.test(quantity)) {
      iQuantity.textContent = "Ingrese una cantidad valida";
      auxIterator++;
      setValidation({ ...validation, auxQuantity: false });
    }
    if (auxIterator === 0) {
      iQuantity.textContent = "";
      quantities.style.border = "";
      setValidation({ ...validation, auxQuantity: true });
    } else {
      quantities.style.borderBottom = "2px solid red";
      quantities.style.borderRadius = "5px";
    }
  };

  const priceValidation = () => {
    const price = formProductValues.price;
    const regexOnlyNumbers = /^0$|^[1-9]\d*$|^\.\d+$|^0\.\d*$|^[1-9]\d*\.\d*$/;
    const iPrice = document.getElementById("iPrice");
    const pricies = document.getElementById("price");
    var auxIterator = 0;

    if (price === "") {
      iPrice.textContent = "Ingrese el precio";
      auxIterator++;
      setValidation({ ...validation, auxPrice: false });
    }
    if (!regexOnlyNumbers.test(price)) {
      iPrice.textContent = "Ingrese un precio valido";
      auxIterator++;
      setValidation({ ...validation, auxPrice: false });
    }
    if (auxIterator === 0) {
      iPrice.textContent = "";
      pricies.style.border = "";
      setValidation({ ...validation, auxPrice: true });
    } else {
      pricies.style.borderBottom = "2px solid red";
      pricies.style.borderRadius = "5px";
    }
  };
  const handleSubmitInternal = (e) => {
    e.preventDefault();

    if (
      validation.auxName_product === true &&
      validation.auxDescription === true &&
      validation.auxProvider_ID === true &&
      validation.auxQuantity === true &&
      validation.auxPrice === true
    ) {
      handleUpdate(formProductValues);
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
              id="name_product"
              name="name_product"
              value={formProductValues.name_product}
              placeholder="Producto"
              label="Producto"
              onChange={handleChange}
              onBlur={nameValidation}
            />{" "}
            <i id="iName"></i>
            <TextField
              fullWidth
              id="description"
              name="description"
              placeholder="Marca"
              value={formProductValues.description}
              label="Marca"
              onChange={handleChange}
              onBlur={descriptionValidation}
              style={{
                marginTop: "5%",
              }}
            />
            <i id="iDescription"></i>
            <FormControl
              fullWidth
              style={{
                marginTop: "5%",
              }}
            >
              <InputLabel id="labelTypeUser">Empresa Proveedor</InputLabel>
              <Select
                fullWidth
                labelId="labelTypeUser"
                id="provider_ID"
                name="provider_ID"
                value={formProductValues.provider_ID}
                label="Empresa Proveedor"
                onChange={handleChange}
                onBlur={providerValidation}
              >
                <MenuItem disabled selected>
                  Seleccione la empresa proveedor
                </MenuItem>
                {providers.map((item) => (
                  <MenuItem value={item._id}>{item.name_provider}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />
            <TextField
              fullWidth
              id="quantity"
              name="quantity"
              placeholder="Cantidad"
              value={formProductValues.quantity}
              type="quantity"
              label="Cantidad"
              onChange={handleChange}
              onBlur={quantityValidation}
              style={{
                marginTop: "5%",
              }}
            />
            <i id="iQuantity"></i>
            <br />
            <TextField
              fullWidth
              id="price"
              name="price"
              placeholder="Precio"
              value={formProductValues.price}
              type="price"
              label="Precio"
              onChange={handleChange}
              onBlur={priceValidation}
              style={{
                marginTop: "5%",
              }}
            />
            <i id="iPrice"></i>
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
export default ProdutEdit;
