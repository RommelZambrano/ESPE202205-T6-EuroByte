import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Paper, TextField } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

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
    width: "90%",
    opacity: 0.93,
    height: "76vh",
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
    overflow: "auto hidden",
    backgroundColor: "#F7F9F9",
    width: "100%",
    "& .super-app-theme--header": {
      backgroundColor: "#17202A",
      color: "white",
    },
    justifyContent: "center",
    display: "center",
    color: "#2C3E50",
  },
}));

const TableAPI = (props) => {
  const classes = useStyles();
  var data;
  try {
    const documents = props.documents;
    data = documents.response.docs;
    const { formPublications, setformPublications } = props;

    const handleChange = (event) => {
      const { id, value } = event.target;
      setformPublications({ ...formPublications, [id]: value });
    };
    const columns = [
      {
        field: "title_display",
        headerClassName: "super-app-theme--header",
        headerName: "Titulo",
        headerAlign: "center",
        minWidth: 200,
        padding: 2,
        align: "center",
      },
      {
        field: "journal",
        headerClassName: "super-app-theme--header",
        headerName: "Revista",
        headerAlign: "center",
        minWidth: 90,
        align: "center",
      },
      {
        field: "eissn",
        headerClassName: "super-app-theme--header",
        headerName: "Eissn",
        headerAlign: "center",
        minWidth: 75,
        align: "center",
      },
      {
        field: "publication_date",
        headerClassName: "super-app-theme--header",
        headerName: "Fecha de Publicacion",
        headerAlign: "center",
        minWidth: 175,
        align: "center",
      },
      {
        field: "article_type",
        headerClassName: "super-app-theme--header",
        headerName: "Tipo de Articulo",
        headerAlign: "center",
        minWidth: 130,
        align: "center",
      },
      {
        field: "author_display",
        headerClassName: "super-app-theme--header",
        headerName: "Autores",
        flex: 1,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "score",
        headerClassName: "super-app-theme--header",
        headerName: "Puntuacion",
        minWidth: 50,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "id",
        headerClassName: "super-app-theme--header",
        headerName: "Ver Publicacion",
        headerAlign: "center",
        minWidth: 130,
        align: "center",
        renderCell: (params) => (
          <IconButton
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://journals.plos.org/plosone/article?id=${params.id}`}
          >
            <OpenInNewIcon>{params.id}</OpenInNewIcon>
          </IconButton>
        ),
      },
    ];
    return (
      <Paper className={classes.Box}>
        <TextField
          name="id"
          id="id"
          label="Buscar Titulo"
          placeholder="Ingresa un titulo"
          type="search"
          variant="standard"
          size="small"
          value={formPublications.id}
          onChange={handleChange}
        />
        <br />
        <div className={classes.div}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={10}
            rowPerPageOptions={[10]}
          />
        </div>
      </Paper>
    );
  } catch (error) {}
};

export default TableAPI;