import React from "react";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import InvoiceDelete from "./Invoices-Delete";
import InvoiceEdit from "./Invoices-Edit";
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
    opacity: 0.93,
    width: "90%",
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
    backgroundColor: "#F9E79F",
  },
  div: {
    height: 400,
    backgroundColor: "#F7F9F9",
    "& .super-app-theme--header": {
      backgroundColor: "#17202A",
      color: "white",
    },
    width: "140%",
    justifyContent: "center",
    flexDirection: "column",
    display: "center",
  },
}));
const TableInvoice = (props) => {
  const classes = useStyles();
  const products = props.products;
  const clients = props.clients;
  const invoices = props.invoices;
  const updateRegister = props.updateRegister;
  const deleteRegister = props.deleteRegister;

  const handleDelete = (idInvoice) => {
    deleteRegister(idInvoice);
  };
  const handleUpdate = (values) => {
    updateRegister(values);
  };

  const columns = [
    {
      field: "client_ID",
      headerClassName: "super-app-theme--header",
      headerName: "Nombre del Cliente",
      headerAlign: "center",
      flex: 1,
      align: "center",
    },
    {
      field: "product_ID",
      headerClassName: "super-app-theme--header",
      headerName: "Producto Comprado",
      headerAlign: "center",
      flex: 1,
      align: "center",
    },
    {
      field: "quantity",
      headerClassName: "super-app-theme--header",
      headerName: "Cantidad",
      headerAlign: "center",
      flex: 1,
      align: "center",
    },
    {
      field: "price",
      headerClassName: "super-app-theme--header",
      headerName: "Precio (p/u)",
      headerAlign: "center",
      flex: 1,
      align: "right",
    },
    {
      field: "subtotal",
      headerClassName: "super-app-theme--header",
      headerName: "subtotal($)",
      headerAlign: "center",
      flex: 1,
      align: "right",
    },
    {
      field: "IVA",
      headerClassName: "super-app-theme--header",
      headerName: "IVA($)",
      headerAlign: "center",
      headerTintColor: "#2C3E50",
      flex: 1,
      align: "right",
    },
    {
      field: "total",
      headerClassName: "super-app-theme--header",
      headerName: "Total($)",
      headerAlign: "center",
      flex: 1,
      align: "right",
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
          <InvoiceEdit
            data={params.row}
            handleUpdate={handleUpdate}
            products={products}
            clients={clients}
          />
          <InvoiceDelete index={params.row.id} handleDelete={handleDelete} />
        </div>
      ),
    },
  ];
  return (
    <Paper className={classes.Box}>
      <h2>LISTA DE FACTURAS REGISTRADAS</h2>
      <div className={classes.div}>
        {columns.label}
        <DataGrid
          rows={invoices.map((item) => ({
            id: item._id,
            client_ID: item.client_ID.name_client,
            product_ID: item.product_ID.name_product,
            quantity: item.quantity,
            price: item.price,
            subtotal: item.subtotal,
            IVA: item.IVA,
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

export default TableInvoice;
