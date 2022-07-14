import React from React;
import '../index.css';

const Table=(props)=>{
    const id=props.id
}

console.log(id)

const columns=[
    {field: 'id', headerName: 'ID', width:200},
    {field: 'journal', headerName: 'Journal', width:200}
]

return(
    <Box

        sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.dark',
            '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
            },
          }}
    >
        <h1>Scientific Publications</h1>
        <div style={{height: 400, width: '100%'}}>
            <DataGrid
                rows=
                {
                    
                }

        </div>



    </Box>
)