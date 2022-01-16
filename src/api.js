import axios from 'axios';

const instance = axios.create({
  baseURL: "https://webprogramingfinal.herokuapp.com", //new URL("", window.location.href),
});

export default instance;