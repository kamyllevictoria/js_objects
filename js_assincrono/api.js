const axios = require('axios');

//consumindo uma api
axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then((response) =>{
    console.log({data: response.data})
})
.catch((error) => {
    console.log({error})
})

const fetchApi = async() =>{
   try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log({response})
   } 
   catch (error){
    console.log({error})
   }
}

fetchApi()