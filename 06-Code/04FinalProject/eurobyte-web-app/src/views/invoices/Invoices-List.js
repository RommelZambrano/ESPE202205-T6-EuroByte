import InvoicesList from "../.././components/invoices/Invoices-List";
import { getInvoices, deleteInvoices, putInvoices } from "../../services/Invoices-Axios";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/Navigation";
import Cookies from "universal-cookie/es6";
import { makeStyles } from "@material-ui/core/styles";
import { getProducts } from "../../services/Products-Axios";
import { getClients } from "../../services/Clients-Axios";

const cookies = new Cookies();
const useStyles = makeStyles((theme) => ({
    Box: {
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 110%",
        backgroundAttachment: "fixed",
        backgroundColor: "#d4c4fb",
        width: "100%",
        height: "100%",
        position: "absolute",
      },
}));
const ListInvoices = () => {
  const classes = useStyles();
  const [invoices, setInvoices] = useState([]);
  const [products, setProducts] = useState([]);
  const [clients, setClients] = useState([]);
  const deleteRegister = (idInvoice) => {
    deleteInvoices(idInvoice);
  };

  const updateRegister = (values) => {
    putInvoices(values);
  };

  useEffect(() => {
    async function loadProducts() {
      const response = await getProducts();

      if (response.status === 200) {
        setProducts(response.data);
      }
    }

    loadProducts();
  }, []);
  useEffect(() => {
    async function loadClients() {
      const response = await getClients();

      if (response.status === 200) {
        setClients(response.data);
      }
    }

    loadClients();
  }, []);
  useEffect(() => {
    async function loadInvoices() {
      const response = await getInvoices();

      if (response.status === 200) {
        setInvoices(response.data);
      }
    }

    loadInvoices();
  }, []);

  useEffect(() => {
    if (
      typeof cookies.get("email") === "undefined" ||
      cookies.get("type", { path: "/" }) !== "1"
    ) {
      window.location.href = "./";
    }
  });

  return (
    <>
      <Box className={classes.Box}>
        <NavBar />
        <br /><br /><br />
        <br /><br /><br />
        <InvoicesList
          products={products}
          invoices={invoices}
          clients={clients}
          deleteRegister={deleteRegister}
          updateRegister={updateRegister}
        />
      </Box>
    </>
  );
};
export default ListInvoices;