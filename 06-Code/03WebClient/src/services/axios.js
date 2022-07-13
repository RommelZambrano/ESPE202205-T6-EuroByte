import axios from 'axios'

const baseUrl='https://api.plos.org/search?q=title:github'

export async function getCountry(response){
    try{
        const response= await axios({
            url:`${baseUrl}$={response}`,
            method:'GET',
        })
        return response
    }catch(error){
        console.log(error)
    }
}