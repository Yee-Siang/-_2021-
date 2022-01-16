import axios from 'axios';

const instance = axios.create({
  //baseURL: new URL('/', window.location.origin).toString(),
  baseURL: 'http://mm2021final.herokuapp.com',
});

export default instance;