import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
});

export const apiKenzieCars = axios.create({
  baseURL: 'https://kenzie-kars.herokuapp.com',
  timeout: 10000
});
