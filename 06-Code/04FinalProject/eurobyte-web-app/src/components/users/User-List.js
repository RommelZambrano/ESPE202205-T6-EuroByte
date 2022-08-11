import React from "react";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import UserDelete from "./User-Delete";
import UserEdit from "./User-Edit";
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
    width: "50%",
    opacity: 0.93,
    height: "64.1vh",
    margin: "auto auto 20px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "1px 20px 20px 20px",
    background: "#ffff",
    borderRadius: "15px",
    boxShadow: "1px 1px 15px #333",
  },
  div: {
    height: 400,
    backgroundColor: "#F7F9F9",
    "& .super-app-theme--header": {
      backgroundColor: "#17202A",
      color: "white",
    },
    width: "100%",
    justifyContent: "center",
    display: "center",
    color: "#2C3E50",
  },
}));
const TableUser = (props) => {
  const classes = useStyles();
  const users = props.users;
  const updateRegister = props.updateRegister;
  const deleteRegister = props.deleteRegister;

  const handleDelete = (idUser) => {
    deleteRegister(idUser);
  };
  const handleUpdate = (values) => {
    updateRegister(values);
  };
  const columns = [
    {
      field: "name_user",
      headerClassName: "super-app-theme--header",
      headerName: "Nombre",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "email",
      headerClassName: "super-app-theme--header",
      headerName: "Correo",
      headerAlign: "center",
      flex: 1,
      align: "center",
    },
    {
      field: "type",
      headerClassName: "super-app-theme--header",
      headerName: "Tipo de usuario",
      headerAlign: "center",
      flex: 1,
      align: "center",
    },
    {
      field: "actions",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      headerName: "Acciones",
      align: "center",
      flex: 1,
      renderCell: (params) => (
        <div>
          <UserEdit
            data={params.row}
            handleUpdate={handleUpdate}
            users={users}
          />
          <UserDelete index={params.row.id} handleDelete={handleDelete} />
        </div>
      ),
    },
  ];
  return (
    <Paper className={classes.Box}>
      <h2>CUENTAS REGISTRADAS</h2>
      <div className={classes.div}>
        <DataGrid
          rows={users.map((item) => ({
            id: item._id,
            name_user: item.name_user,
            email: item.email,
            password: item.password,
            type: item.type,
          }))}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </Paper>
  );
};

export default TableUser;
