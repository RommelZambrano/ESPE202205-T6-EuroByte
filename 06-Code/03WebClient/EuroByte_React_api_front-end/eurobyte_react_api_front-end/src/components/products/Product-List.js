import React from "react";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
//import ProductDelete from "./Product-Delete";
import { makeStyles } from "@material-ui/core/styles";

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
    opacity:0.93,
    width: "50%",
    height: "64.1vh",
    margin: "auto auto 20px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "1px 200px 20px 200px",
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "1px 1px 15px #333",
    backgroundColor: "#F9E79F"
  },
  div: {
    height: 400,
    backgroundColor: "#F7F9F9",
    '& .super-app-theme--header': {
      backgroundColor: '#17202A',
      color: "white",
    },
    width: "150%",
    justifyContent: "center",
    flexDirection: "column",
    display: "center",
  },
}));
const TableProduct = (props) => {
  const classes = useStyles();
  const products = props.products;
  const providers = props.providers;
  const updateRegister = props.updateRegister;
  const deleteRegister = props.deleteRegister;

  const handleDelete = (idProduct) => {
    deleteRegister(idProduct);
  };
  const handleUpdate = (values) => {
    updateRegister(values);
  };

  const getProviderById = (idProvider) => {
    for (var i = 0; i < providers.length; i++) {
      if (providers[i]._id === idProvider) {
        return providers[i].name_provider;
      }
    }
  };
  const columns = [
    {
      field: "name_product",
      headerClassName: 'super-app-theme--header',
      headerName: "Nombre",
      headerAlign: "center",
      flex: 1,
      align: "center",
    },
    {
      field: "description",
      headerClassName: 'super-app-theme--header',
      headerName: "Marca",
      headerAlign: "center",
      flex: 1,
      align: "center",
    },
    {
      field: "provider_ID",
      headerClassName: 'super-app-theme--header',
      headerName: "Empresa Proveedor",
      headerAlign: "center",
      flex: 1,
      align: "center",
    },
    {
      field: "quantity",
      headerClassName: 'super-app-theme--header',
      headerName: "Cantidad",
      headerAlign: "center",
      flex: 1,
      align: "right",
    },
    {
      field: "price",
      headerClassName: 'super-app-theme--header',
      headerName: "Precio (p/u)",
      headerAlign: "center",
      flex: 1,
      align: "right",
    },
    {
      field: "total",
      headerClassName: 'super-app-theme--header',
      headerName: "Total($)",
      headerAlign: "center",
      headerTintColor: '#2C3E50',
      flex: 1,
      align: "right",
    },
    {
      field: "actions",
      headerClassName: 'super-app-theme--header',
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
      <h2>LISTA DE PRODUCTOS REGISTRADOS</h2>
      <div className={classes.div}>
        {columns.label}
        <DataGrid
          rows={products.map((item) => ({
            id: item._id,
            name_product: item.name_product,
            description: item.description,
            provider_ID:  item.provider_ID.name_provider,
            quantity: item.quantity,
            price: item.price,
            total: item.total,
          }))}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </Paper>
  );
};

export default TableProduct;
