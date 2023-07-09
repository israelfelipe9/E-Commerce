import axios from 'axios'
// comentario pra delpoy dnv
export const api = axios.create({
  baseURL: 'http://localhost:4000',
  // baseURL: 'https://ocularis-api.onrender.com',
})
