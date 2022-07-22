import ProviderList from "../../components/providers/Provider-List";
import {
  getProviders,
} from "../../services/Providers-Axios";
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
const ListProvider = () => {
  const classes = useStyles();
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await getProviders();

      if (response.status === 200) {
        setProviders(response.data);
      }
    }

    loadProviders();
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
        <br />
        <br />
        <ProviderList
          providers={providers}

        />
      </Box>
    </>
  );
};
export default ListProvider;
