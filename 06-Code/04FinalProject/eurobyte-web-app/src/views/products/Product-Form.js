import FormProduct from "../../components/products/Product-Form";
import { postProducts } from "../../services/Products-Axios";
import { getProviders } from "../../services/Providers-Axios";
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
    backgroundColor :"#d4c4fb",
    width: "100%",
    height: "135%",
    position: "absolute",
    backgroundImage: "url()",
  },
}));
const ProductForm = () => {
  const classes = useStyles();
  const [providers, setProviders] = useState([]);
  const [values, setValues] = useState({
    name_product: "",
    description: "",
    provider_ID: "",
    quantity: "",
    price: "",
    total: "",
  });

  useEffect(() => {
    async function loadProviders() {
      const response = await getProviders();
      if (response.status === 200) {
        setProviders(response.data);
      }
    }
    loadProviders();
  }, []);

  const handleSubmit = (data) => {
    postProducts(data, values, setValues);
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
        <br /><br /><br />
        <br /><br />
        <FormProduct
          handleSubmit={handleSubmit}
          providers={providers}
          formProductValues={values}
          setFormProductValues={setValues}
        />
        <br />
      </Box>
    </>
  );
};
export default ProductForm;
