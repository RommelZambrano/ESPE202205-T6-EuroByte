import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../../static/AppBar";
import Toolbar from "../../static/ToolBar";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: "#17202A" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            position="fixed"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {"EuroByte"}
          </Link>
          <Box sx={{ flex: 2, display: "flex", justifyContent: "flex-end" }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/login"
              sx={rightLink}
            >
              {"Iniciar Sesion"}
            </Link>
            {" "}
            <Link
              variant="h6"
              underline="none"
              href="/signup"
              sx={{ ...rightLink, color: "secondary.main" }}
            >
              {"Registrarse"}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
