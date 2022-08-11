import FormProvider from "../../components/providers/Provider-Form";
import { postProvider } from "../../services/Providers-Axios";
import { Box } from "@mui/material";
import NavBar from "../../components/Navigation";
import Cookies from "universal-cookie/es6";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const cookies = new Cookies();
const useStyles = makeStyles((theme) => ({
  Box: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "120% 120%",
    backgroundAttachment: "fixed",
    backgroundColor:"#d4c4fb",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
}));
const ProviderForm = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name_provider: "",
    city: "",
  });

  const handleSubmit = (data) => {
    postProvider(data, values, setValues);
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
        <br /><br /><br />
        <FormProvider
          handleSubmit={handleSubmit}
          formProviderValues={values}
          setFormProviderValues={setValues}
        />
        <br />
      </Box>
    </>
  );
};
export default ProviderForm;
