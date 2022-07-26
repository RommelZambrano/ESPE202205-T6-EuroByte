import React, { useState, useEffect } from "react";
import { getInformation } from "../../services/Information-Axios";
import Inf from "../../components/api_information/Imformation_List";
import { Box } from "@mui/system";
import NavBar from "../../components/Navigation";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Box: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 110%",
    backgroundAttachment: "fixed",
    backgroundColor: "#d4c4fb",
    width: "100%",
    height: "95%",
    position: "absolute",
  },
  h2: {
    flexDirection: "center",
    justifyContent: "center",
    textAlign: "center",
  },
}));

function Information_list() {
  const classes = useStyles();
  const [host, setHost] = useState("");
  const [browser, setBrowser] = useState([]);
  const [language, setLanguage] = useState([]);
  const [sistem_Operative, setsistem_Operative] = useState("");
  const [IP, setIP] = useState([]);

  useEffect(() => {
    async function loadInformation() {
      const response = await getInformation();
      setBrowser(`${response.headers["Sec-Ch-Ua"]}`.split(`"`));
      setLanguage(response.headers["Accept-Language"]);
      setsistem_Operative(`${response.headers["Sec-Ch-Ua-Platform"]}`.split(`"`));
      setIP(response.origin);
      setHost(response.headers.Host);
    }

    loadInformation();
  }, []);

  function lenguague() {
    const abr = `${language}`.substring(0, 2);
    if (abr === "es") return "Español";
    else if (abr === "en") return "Ingles";
  }

  return (
    <div>
      <NavBar />
      <Box className={classes.Box}
      >
        <br/>
        <Typography variant="h4" align="center">
          Informacion del Cliente
          
        </Typography>
        <br/>
          <Inf title="Idioma de sistema" info={lenguague()} />
          <Inf title="Host Remoto" info={host}/>
          <Inf title="Direccion IP" info={IP}/>
          <Inf title="Tipo de Navegador" info={browser[5]}/> 
          <Inf title="Sistema Operativo" info={sistem_Operative[1]} />
        </Box>
    </div>
  );
}

export default Information_list;