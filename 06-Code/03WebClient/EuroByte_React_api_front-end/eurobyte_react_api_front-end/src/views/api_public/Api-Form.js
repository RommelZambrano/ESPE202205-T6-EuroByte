import React, {useState} from 'react';
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
    return (
        <form>
            <Box
                    sx={{
                        width: 300,
                        height: 100,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center', 
                        flexDirection: 'column',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        background: '#fff',
                        borderRadius: '15px',
                        boxShadow: '1px 1px 20px #333'
                    }}
            > 
    
            <TextField fullWidth
                name='id'
                id="id"
                value={formPublications.id}
                onChange={handleChange}
                placeholder="Enter criteria"
                label="SEARCH BY"
            />
       
            </Box>
        </form>
    );
}



export default FormPublications