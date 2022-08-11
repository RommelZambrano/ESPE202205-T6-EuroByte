import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
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
    width: "35%",
    height: "100%",
    margin: "auto auto",
    justifyContent: "absolute",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px 20px",
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "1px 1px 15px #333",
  },
  button: {
    margin: theme.spacing(0.5, 0, 3),
  },
}));

const ProductForm = (props) => {
  const classes = useStyles();
  const providers = props.providers;
  const handleSubmit = props.handleSubmit;
  const formProductValues = props.formProductValues;
  const setFormProductValues = props.setFormProductValues;
  const [validation, setValidation] = useState({
    auxName_product: false,
    auxDescription: false,
    auxProvider_ID: false,
    auxQuantity: false,
    auxPrice: false,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormProductValues({ ...formProductValues, [name]: value });
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
      handleSubmit(formProductValues);
      swal.fire(
        {
          title: "Registro Exitoso",
          text: "Se ha registrado el producto",
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

  const nameValidation = () => {
    const name_product = formProductValues.name_product;
    const regexOnlyletters = /^[a-zA-ZáéíóúÁÉÍÓÚ ]+$/;
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
    const name_provider = formProductValues.name_provider;
    if (name_provider === "") {
      name_provider.textContent = "Ingrese un proveedor";
      setValidation({ ...validation, auxProvider_ID: false });
    } else {
      setValidation({ ...validation, auxProvider_ID: true });
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
  
  return (
    <form onSubmit={handleSubmitInternal}>
      <Box className={classes.Box}>
        <br />
        <h1 align="center">Agregar Productos</h1>
        <br />
        <TextField
          fullWidth
          id="name_product"
          name="name_product"
          value={formProductValues.name_product}
          placeholder="Nonbre del Producto"
          label="Producto"
          onChange={handleChange}
          onBlur={nameValidation}
        />
        <i id="iName"></i>
        <br />
        <TextField
          fullWidth
          id="description"
          name="description"
          placeholder="Marca"
          value={formProductValues.description}
          label="Marca"
          onChange={handleChange}
          onBlur={descriptionValidation}
        />
        <i id="iDescription"></i>
        <br />

        <FormControl fullWidth>
          <InputLabel id="labelProvider">Empresa Proveedor</InputLabel>
          <Select
            fullWidth
            labelId="labelProvider"
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
          placeholder="Ingerese la Cantidad"
          value={formProductValues.quantity}
          label="Cantidad"
          onChange={handleChange}
          onBlur={quantityValidation}
        />
        <i id="iQuantity"></i>
        <br />
        <TextField
          fullWidth
          id="price"
          name="price"
          placeholder="Ingerese el precio"
          value={formProductValues.price}
          label="Precio"
          onChange={handleChange}
          onBlur={priceValidation}
        />
        <i id="iPrice"></i>
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

export default ProductForm;
