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

const InvoiceForm = (props) => {
  const classes = useStyles();
  const clients = props.clients;
  const products = props.products;
  const handleSubmit = props.handleSubmit;
  const formInvoiceValues = props.formInvoiceValues;
  const setFormInvoiceValues = props.setFormInvoiceValues;
  const [validation, setValidation] = useState({
    auxID_Client: false,
    auxID_Product: false,
    auxQuantity: false,
    auxPrice: false,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInvoiceValues({ ...formInvoiceValues, [name]: value });
  };
  const handleSubmitInternal = (e) => {
    e.preventDefault();

    if (
      validation.auxID_Client === true &&
      validation.auxID_Product === true &&
      validation.auxQuantity === true &&
      validation.auxPrice === true
    ) {
      handleSubmit(formInvoiceValues);
      swal.fire(
        {
          title: "Registro Exitoso",
          text: "Se ha registrado la factura",
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

  const clientValidation = () => {
    const name_client = formInvoiceValues.name_client;
    const iClientID = document.getElementById("iClientID");
    const clientsid = document.getElementById("client_ID");
    var auxIterator = 0;

    if (name_client === "") {
      iClientID.textContent = "Seleccione un cliente";
      auxIterator++;
      setValidation({ ...validation, auxID_Client: false });
    }
    if (auxIterator === 0) {
      iClientID.textContent = "";
      clientsid.style.border = "";
      setValidation({ ...validation, auxID_Client: true });
    } else {
      clientsid.style.borderBottom = "2px solid red";
      clientsid.style.borderRadius = "5px";
    }
  };

  const productValidation = () => {
    const name_product = formInvoiceValues.name_product;
    const iProductID = document.getElementById("iProductID");
    const pruductid = document.getElementById("product_ID");
    var auxIterator = 0;

    if (name_product === "") {
      iProductID.textContent = "Seleccione un Producto";
      auxIterator++;
      setValidation({ ...validation, auxID_Product: false });
    }
    if (auxIterator === 0) {
      iProductID.textContent = "";
      pruductid.style.border = "";
      setValidation({ ...validation, auxID_Product: true });
    } else {
      pruductid.style.borderBottom = "2px solid red";
      pruductid.style.borderRadius = "5px";
    }
  };

  const quantityValidation = () => {
    const quantity = formInvoiceValues.quantity;
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
    const price = formInvoiceValues.price;
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
        <h1 align="center">Generar Factura</h1>
        <br />
        <FormControl fullWidth>
          <InputLabel id="labelClient">Cliente</InputLabel>
          <Select
            fullWidth
            labelId="labelClient"
            id="client_ID"
            name="client_ID"
            value={formInvoiceValues.client_ID}
            label="Cliente"
            onChange={handleChange}
            onBlur={clientValidation}
          >
            <MenuItem disabled selected>
              Seleccione el Cliente
            </MenuItem>
            {clients.map((item) => (
              <MenuItem value={item._id}>{item.name_client}</MenuItem>
            ))}
          </Select>
          <i id="iClientID"></i>
        </FormControl>
        <br />
        <FormControl fullWidth>
          <InputLabel id="labelProduct">Producto</InputLabel>
          <Select
            fullWidth
            labelId="labelProduct"
            id="product_ID"
            name="product_ID"
            value={formInvoiceValues.product_ID}
            label="Producto"
            onChange={handleChange}
            onBlur={productValidation}
          >
            <MenuItem disabled selected>
              Seleccione el Producto
            </MenuItem>
            {products.map((item) => (
              <MenuItem value={item._id}>{item.name_product}</MenuItem>
            ))}
          </Select>
          <i id="iProductID"></i>
        </FormControl>
        <br />
        <TextField
          fullWidth
          id="quantity"
          name="quantity"
          placeholder="Ingerese la Cantidad"
          value={formInvoiceValues.quantity}
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
          value={formInvoiceValues.price}
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

export default InvoiceForm;
