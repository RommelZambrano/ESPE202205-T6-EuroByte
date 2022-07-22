import * as React from "react";
import AppBar from "@mui/material/AppBar";
import AdbIcon from "@mui/icons-material/Adb";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Cookies from "universal-cookie/es6";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SupervisedUserCircleRoundedIcon from "@mui/icons-material/SupervisedUserCircleRounded";

const cookies = new Cookies();
const useStyles = makeStyles((theme) => ({
  link: {
    
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "#F5EB19",
      borderBottom: "0.9px solid #17202A",
    },
    AppBar: {
      backgroundColor: "#17202A",
    },
  },
}));
const NavigationAdmin = () => {
  const classes = useStyles();
  const [anchorForms, setAnchorForms] = React.useState(null);
  const [anchorReports, setAnchorReports] = React.useState(null);
  const [anchorAccount, setAnchorAccount] = React.useState(null);
  const [anchorAdmin, setAnchorAdmin] = React.useState(null);
  const handleUser = () => {
    window.location.href = "/addUser";
  };
  const handleListUser = () => {
    window.location.href = "/listUsers";
  };
  const handleProduct = () => {
    window.location.href = "/addProduct";
  };
  const handleListProduct = () => {
    window.location.href = "/listProducts";
  };
  const handleProvider = () => {
    window.location.href = "/addProvider";
  };
  const handleListProvider = () => {
    window.location.href = "/listProviders";
  };
  const handleListJournals = () => {
    window.location.href = "/listDocs";
  };
  const IconRef = () => {
    window.location.href = "./homeAdmin";
  };
  const handleMenu = (event) => {
    setAnchorAccount(event.currentTarget);
  };
  const handleMenuAdmin = (event) => {
    setAnchorAdmin(event.currentTarget);
  };
  const handleOpenReportMenu = (event) => {
    setAnchorReports(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorAccount(null);
    setAnchorAdmin(null);
    setAnchorForms(null);
    setAnchorReports(null);
  };

  const logOut = () => {
    cookies.remove("name", { path: "/" });
    cookies.remove("email", { path: "/" });
    window.location.href = "./";
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#17202A" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton color="inherit" className={classes.link}>
            <AdbIcon onClick={IconRef} />
          </IconButton>
          <box
            sx={{ display: { xs: "none", md: "flex", marginRight: "auto" } }}
          >
           {/* <Button
              className={classes.link}
              key="forms"
              sx={{ my: 1, color: "white", display: "block" }}
              onClick={handleOpenFormMenu}
            >
              Formularios
            </Button> */}
            <Menu
              sx={{ mt: "45px" }}
              id="subMenuForms"
              anchorEl={anchorForms}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorForms)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={handleProduct}
                sx={{ my: 0, color: "black", display: "auto" }}
              >
                <Typography textAlign="center">Productos</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleProvider}
                sx={{ my: 0, color: "black", display: "auto" }}
              >
                <Typography textAlign="center">Proveedores</Typography>
              </MenuItem>
            </Menu>
          </box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              className={classes.link}
              key="reports"
              sx={{
                display: {
                  xs: "none",
                  color: "white",
                  md: "flex",
                  flexGrow: 0.02,
                },
                mr: 4,
              }}
              onClick={handleOpenReportMenu}
            >
              Registros
            </Button>
            <Menu
              sx={{ mt: "45px" }}
              id="subMenuReports"
              anchorEl={anchorReports}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              open={Boolean(anchorReports)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleListProvider}>
                <Typography textAlign="center">Proveedores</Typography>
              </MenuItem>
              <MenuItem onClick={handleListProduct}>
                <Typography textAlign="center">Clientes</Typography>
              </MenuItem>
              <MenuItem onClick={handleListProduct}>
                <Typography textAlign="center">Productos</Typography>
              </MenuItem>
              <MenuItem onClick={handleListJournals}>
                <Typography textAlign="center">API Publica</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0.02 }}>
            <IconButton
              size="large"
              className={classes.link}
              aria-label="account of current user"
              aria-controls="menuapp"
              aria-haspopup="true"
              color="inherit"
              onClick={handleMenuAdmin}
            >
              {" "}
              <SupervisedUserCircleRoundedIcon />
            </IconButton>

            <Menu
              sx={{ mt: "0.2px" }}
              id="menuAdmin"
              anchorEl={anchorAdmin}
              onClose={handleClose}
              keepMounted
              open={Boolean(anchorAdmin)}
            >
              <MenuItem onClick={handleUser}> Agregar Cuenta</MenuItem>
              <MenuItem onClick={handleListUser}>Administrar Cuentas</MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0.02 }}>
            <IconButton
              size="large"
              className={classes.link}
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleMenu}
            >
              {" "}
              <AccountCircle />
            </IconButton>

            <Menu
              sx={{ mt: "0.2px" }}
              id="menu-appbar"
              anchorEl={anchorAccount}
              onClose={handleClose}
              keepMounted
              open={Boolean(anchorAccount)}
            >
              <MenuItem onClick={logOut}>Salir</MenuItem>
              <MenuItem>Perfil</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationAdmin;
