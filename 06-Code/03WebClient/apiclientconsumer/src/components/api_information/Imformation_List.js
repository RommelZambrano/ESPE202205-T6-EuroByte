import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";  
import Typography from "@mui/material/Typography";

export default function CardInfo({ title, info }) {
  return (
    <Card sx={{ marginTop: '0', display: "center", margin: "auto", height: "80px", width: "400px" }}>
    
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", pl: 15, pb: -4 }}>
          <Typography  variant="h5" >
            {title}
          </Typography>
          </Box>
        <Box sx={{ display: "flex", alignItems: "center", pl: 15, pb: 4 }}>
          <Typography  variant="h7" >
            {info}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
