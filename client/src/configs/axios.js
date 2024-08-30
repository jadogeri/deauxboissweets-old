import axios from "axios";

const baseURL = process.env.SERVER_BASE_URL

const headers ={
    'Content-Type': 'application/json',
    "Accept":'application/json',
    "Access-Control-Allow-Origin": "*"       
}

const api =  axios.create({
      
    baseURL: baseURL ,
    headers: headers
  
})
console.log(api);

export default api


