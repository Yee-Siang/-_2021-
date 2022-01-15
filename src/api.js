import axios from 'axios';

const instance = axios.create({
  baseURL: new URL('/api', window.location.origin).toString(),
});

export default instance;