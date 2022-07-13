import React from 'react';
import '../index.css';
import {Box, TextField} from "@mui/material"

const FormPublications=(props)=>{
    const {formPublications, setformPublications}=props

    const handleChange=(event)=>{
        const {id, value}=event.target
        setformPublications({...formPublications,[id]:value})
    }

    const handelSubmit=(e)=>{
        e.preventDefaul()
    }
}

return (
    <form>
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

        <TextField fullWidth
            id=""
            value={formPublications.id}
            onChange={handleChange}
            placeholder="Search by id"
            label="id"
        />
   
        </Box>
    </form>
);

export default FormPublications;
