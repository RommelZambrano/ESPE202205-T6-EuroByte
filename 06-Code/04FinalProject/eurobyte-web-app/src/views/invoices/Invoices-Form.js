import FormInvoice from "../../components/invoices/Invoices-Form";
import { getProducts } from "../../services/Products-Axios";
import { postInvoices } from "../../services/Invoices-Axios";
import { getClients } from "../../services/Clients-Axios";
import { Box } from "@mui/material";
import NavBar from "../../components/Navigation";
import Cookies from "universal-cookie/es6";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const cookies = new Cookies();
const useStyles = makeStyles((theme) => ({
  Box: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "200% 200%",
    backgroundAttachment: "fixed",
    backgroundColor: "#d4c4fb",
    width: "100%",
    height: "135%",
    position: "absolute",
    backgroundImage: "url()",
  },
}));
const InvoiceForm = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [clients, setClients] = useState([]);
  const [values, setValues] = useState({
    client_ID: "",
    product_ID: "",
    quantity: "",
    price: "",
    subtotal: "",
    IVA: "",
    total: "",
  });

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
    async function loadClient() {
      const response = await getClients();
      if (response.status === 200) {
        setClients(response.data);
      }
    }
    loadClient();
  }, []);

  const handleSubmit = (data) => {
    postInvoices(data, values, setValues);
  };

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
        <br />
        <br />
        <br />
        <br />
        <br />
        <FormInvoice
          handleSubmit={handleSubmit}
          clients={clients}
          products={products}
          formInvoiceValues={values}
          setFormInvoiceValues={setValues}
        />
        <br />
      </Box>
    </>
  );
};
export default InvoiceForm;
