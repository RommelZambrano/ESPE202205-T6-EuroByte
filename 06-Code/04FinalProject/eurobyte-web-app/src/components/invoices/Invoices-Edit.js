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

const InvoiceEdit = (props) => {
  const data = props.data;
  const clients = props.clients;
  const products = props.products;
  const handleUpdate = props.handleUpdate;
  const [open, setOpen] = useState(false);
  const [formInvoiceValues, setFormInvoiceValues] = useState({
    id: data.id,
    client_ID: data.client_ID,
    product_ID: data.product_ID,
    quantity: data.quantity,
    price: data.price,
  });

  const [validation, setValidation] = useState({
    auxID_Client: true,
    auxID_Product: true,
    auxQuantity: true,
    auxPrice: true,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInvoiceValues({ ...formInvoiceValues, [name]: value });
    console.log(formInvoiceValues);
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
  const handleSubmitInternal = (e) => {
    e.preventDefault();

    if (
      validation.auxID_Client === true &&
      validation.auxID_Product === true &&
      validation.auxQuantity === true &&
      validation.auxPrice === true
    ) {
      handleUpdate(formInvoiceValues);
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
            <FormControl
              fullWidth
              style={{
                marginTop: "5%",
              }}
            >
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
              placeholder="Cantidad"
              value={formInvoiceValues.quantity}
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
              value={formInvoiceValues.price}
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
export default InvoiceEdit;
