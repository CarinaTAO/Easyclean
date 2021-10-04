import axios from 'axios';


const baseURL = `http://localhost:8000/api/v1`;
  
const fetchTaskDetails = axios.create({
    baseURL
  });

export default fetchTaskDetails;
