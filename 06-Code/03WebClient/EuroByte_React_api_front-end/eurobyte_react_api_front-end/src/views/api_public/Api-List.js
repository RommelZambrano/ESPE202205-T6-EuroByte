import Table from "./Table"
import FormPublications from "./FormPublications"
import { getID } from "../services/axios"
import React, { useEffect, useState } from "react"
import Box from '@mui/material/Box';

const TableLayout=()=>{
    const [formPublications, setformPublications]=useState({
        id:""
    })
    const[documents, setDocuments]=useState([])

    useEffect(()=>{
        async function loadDocuments(){
            try {
                const response=await getID(formPublications.id)
                if(response.status===200){
                    setDocuments(response.data)
                }
            } catch (error) {                
            }            
        }

        loadDocuments()
    },[formPublications])

    return(
        <Box>
            <br/><br/><br/><br/>
            <FormPublications formPublications={formPublications} setformPublications={setformPublications}/>
            <br/><br/>
            <Table documents={documents}/>
        </Box>
    )
}

export default TableLayout;