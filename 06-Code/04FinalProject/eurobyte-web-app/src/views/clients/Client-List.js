import ClientList from "../.././components/clients/Client-List";
import { getClients, deleteClient, putClient } from "../../services/Clients-Axios";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/Navigation";
import Cookies from "universal-cookie/es6";
import { makeStyles } from "@material-ui/core/styles";

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
const ListClient = () => {
  const classes = useStyles();
  const [clients, setClients] = useState([]);

  const deleteRegister = (idClient) => {
    deleteClient(idClient);
  };

  const updateRegister = (values) => {
    putClient(values);
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
        <ClientList
          clients={clients}
          deleteRegister={deleteRegister}
          updateRegister={updateRegister}
        />
      </Box>
    </>
  );
};
export default ListClient;
