import AdminScreen from "../components/AdminScreen";
import "../index.css";
import { Box } from "@mui/material";
import Navigation from "../components/Navigation";
import Cookies from "universal-cookie/es6";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const cookies = new Cookies();
const useStyles = makeStyles((theme) => ({
  Box: {
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.08em'
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: '#17202A',
        outline: '1px solid slategrey'
      }
    },
    backgroundRepeat: "no-repeat",
    backgroundSize: "120% 120%",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundImage:
      "url(https://c.tenor.com/KsrYRRbv14AAAAAd/star.gif)",
  },
}));
const AdminLayout = () => {
  const classes = useStyles();
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
        <Navigation />
        <br />
        <br />
        <AdminScreen />
        <br />
      </Box>
    </>
  );
};

export default AdminLayout;