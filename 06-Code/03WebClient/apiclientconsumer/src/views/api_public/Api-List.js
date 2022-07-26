import ListApi from "../../components/api_public/Api-List";
import NavBar from "../../components/Navigation";
import { getTitle } from "../../services/ApiPublic-Axios";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  Box: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 110%",
    backgroundAttachment: "fixed",
    backgroundColor: "#d4c4fb",
    width: "100%",
    height: "110%",
    position: "absolute",
  },
  h2: {
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const ApiList = () => {
  const classes = useStyles();
  const [formPublications, setformPublications] = useState({
    id: "github",
  });
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    async function loadDocuments() {
      try {
        const response = await getTitle(formPublications.id);
        if (response.status === 200) {
          setDocuments(response.data);
        }
      } catch (error) {}
    }

    loadDocuments();
  }, [formPublications]);

  return (
    <Box className={classes.Box}>
         <NavBar />
      <h2 className={classes.h2}>LISTA DE REVISTAS CIENTIFICAS</h2>

      <ListApi
        documents={documents}
        formPublications={formPublications}
        setformPublications={setformPublications}
      />
      <br />
    </Box>
  );
};

export default ApiList;