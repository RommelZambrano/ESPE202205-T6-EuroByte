import axios from 'axios'

const baseUrl='https://api.plos.org'

export async function getID(title){
    try{
        const response= await axios({
            url:`${baseUrl}/search?q=title:${title}`,
            method:'GET',
        })
        return response
    }catch(error){
        console.log(error)
    }
}