import React from 'react';
import '../index.css';
import {Box} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import { IconButton, Button } from '@mui/material';

var data;

const columns=[

    {
        field: "id",
        headerClassName: "super-app-theme--header",
        headerName: "ID",
        headerAlign: "center",
        minWidth: 250,
        align: "center",
        renderCell: (params) => (
          <IconButton
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://journals.plos.org/plosone/article?id=${params.id}`}
          >
            <Button>{params.id}</Button>
          </IconButton>
        ),
    },

    {
        field: "title_display",
        headerClassName: "super-app-theme--header",
        headerName: "Title Display",
        headerAlign: "center",
        minWidth: 300,
        padding: 2,
        align: "center",
      },
      {
        field: "journal",
        headerClassName: "super-app-theme--header",
        headerName: "Journal",
        headerAlign: "center",
        minWidth: 250,
        align: "center",
      },

  {
        field: "eissn",
        headerClassName: "super-app-theme--header",
        headerName: "Eissn",
        headerAlign: "center",
        minWidth: 85,
        align: "center",
      },
      {
        field: "publication_date",
        headerClassName: "super-app-theme--header",
        headerName: "Publication Date",
        headerAlign: "center",
        minWidth: 190,
        align: "center",
      },
  {
        field: "article_type",
        headerClassName: "super-app-theme--header",
        headerName: "Article Type",
        headerAlign: "center",
        minWidth: 150,
        align: "center",
      },
      {
        field: "author_display",
        headerClassName: "super-app-theme--header",
        headerName: "Author Display",
        flex: 1,
        headerAlign: "center",
        align: "left",
      },
  {
        field: "score",
        headerClassName: "super-app-theme--header",
        headerName: "Score",
        minWidth: 200,
        headerAlign: "center",
        align: "center",
      },

]

const Table=(props)=>{
    try {
        const documents=props.documents
    data=documents.response.docs;

console.log(documents)

return(
    <Box

        sx={{
            width: '100%',
            height: 400,
        }}
    >
        <h1>SCIENTIFIC PUBLICATIONS</h1>
        <div style={{height: 500, width: '100%'}}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                rowPerPageOptions={[10]}
            />

        </div>

    </Box>
);
        
    } catch (error) {
        
    }
    
}

export default Table