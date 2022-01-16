import axios from 'axios';

const instance = axios.create({
  baseURL: new URL("", window.location.href),
});

export default instance;