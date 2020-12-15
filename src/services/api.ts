import axios from 'axios'

const api = axios.create({
  // Local
  // baseURL: 'http://localhost:3333'

  // Online
  baseURL: 'https://api.mocki.io/v1/b995b517'
})

export default api
