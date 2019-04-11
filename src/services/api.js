import axios from 'axios';

const api = axios.create({ 
    baseURL: "https://omnistack-backend.herokuapp.com/"
    //'https://oministackbackendlucas.herokuapp.com/' or localhost:3333
 });

 export default api;