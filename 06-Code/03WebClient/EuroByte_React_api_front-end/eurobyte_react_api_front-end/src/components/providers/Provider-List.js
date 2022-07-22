import React from "react";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
//import ProviderDelete from "./Provider-Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Box: {
    "@global": {
      "*::-webkit-scrollbar": {
        width: "0.08em",
      },
      "*::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "#17202A",
        outline: "1px solid slategrey",
      },
    },
    overflow: "hidden",
    opacity: 0.93,
    width: "50%",
    height: "64.1vh",
    margin: "auto auto 20px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "1px 35px 20px 35px",
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "1px 1px 15px #333",
    backgroundColor: "#F9E79F",
  },
  div: {
    height: 400,
    backgroundColor: "#F7F9F9",
    width: "100%",
    justifyContent: "center",
    "& .super-app-theme--header": {
      backgroundColor: "#17202A",
      color: "white",
    },
    flexDirection: "column",
    display: "center",
  },
}));
const TableProvider = (props) => {
  const classes = useStyles();
  const providers = props.providers;

  const columns = [
    {
      field: "name_provider",
      headerClassName: "super-app-theme--header",
      headerName: "Nombre Empresa Proveedor",
      headerAlign: "center",
      flex: 1,
      align: "center",
    },
    {
      field: "city",
      headerClassName: "super-app-theme--header",
      headerName: "Ciudad",
      headerAlign: "center",
      color: "#B0CB4C",
      flex: 1,
      align: "center",
    },
    {
      field: "actions",
      headerClassName: "super-app-theme--header",
      headerName: "Acciones",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params) => (
        <div>
    
        </div>
      ),
    },
  ];
  return (
    <Paper className={classes.Box}>
      <h2>LISTA DE EMPRESAS PROVEEDORAS</h2>
      <div className={classes.div}>
        {columns.label}
        <DataGrid
          rows={providers.map((item) => ({
            id: item._id,
            name_provider: item.name_provider,
            city: item.city,
          }))}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </Paper>
  );
};

export default TableProvider;
