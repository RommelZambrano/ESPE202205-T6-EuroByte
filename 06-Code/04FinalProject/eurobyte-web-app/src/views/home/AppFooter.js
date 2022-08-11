import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Typography from "../../static/Typography";

function Copyright() {
  return (
    <React.Fragment color="#E4E2F1">
      <Link
        color="#E4E2F1"
        target="_blank"
        href="https://github.com/RommelZambrano/ESPE202205-T6-EuroByte"
      >
        {"© "} EuroByte {new Date().getFullYear()}
      </Link>{" "}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#E4E2F1",
  mr: 1,
  "&:hover": {
    bgcolor: "#E4E2F1",
  },
};
export default function AppFooter() {
  return (
    <Typography component="footer" sx={{ display: "flex", bgcolor: "#17202A" }}>
      <Container sx={{ my: 6, display: "colmun" }}>
        <Grid container spacing={10}>
          <Grid item>
            <Typography
              variant="h6"
              marked="left"
              gutterBottom
              color="common.white"
            >
              Redes
            </Typography>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: "flex" }}>
                <Box
                  component="a"
                  target="_blank"
                  href="https://facebook.com"
                  sx={iconStyle}
                >
                  <FacebookIcon color="primary" alt="Facebook" />
                </Box>
                <Box
                  component="a"
                  target="_blank"
                  href="https://twitter.com"
                  sx={iconStyle}
                >
                  <TwitterIcon color="primary" alt="Twitter" />
                </Box>
              </Grid>
              <Grid item sx={{ display: "flex" }}>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={7} md={7}>
            <Typography
              variant="h6"
              marked="left"
              gutterBottom
              color="common.white"
            >
              Sobre Nosotros
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.9 }}>
                <Link href="/about" color="common.white">
                  Informate
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
