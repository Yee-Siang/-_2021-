import axios from 'axios';

const instance = axios.create({
  baseURL: /* process.env.REACT_APP_API_URI || */ `http://localhost:4000/`,
});

export default instance;