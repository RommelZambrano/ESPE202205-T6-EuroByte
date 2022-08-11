import FormClient from "../../components/clients/Client-Form";
import { postClient, getClients } from "../../services/Clients-Axios";
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
    position: "absolute",
  },
}));
const ClientForm = () => {
  const classes = useStyles();
  const [clients, setClients] = useState([]);
  const [values, setValues] = useState({
    name_client: "",
    email: "",
    CI: "",
    address: "",
  });

  const handleSubmit = (data) => {
    postClient(data, values, setValues);
  };
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
        <FormClient
          handleSubmit={handleSubmit}
          clients={clients}
          formClientValues={values}
          setFormClientValues={setValues}
        />
        <br />
      </Box>
    </>
  );
};
export default ClientForm;
