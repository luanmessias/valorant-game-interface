import axios from 'axios'

const api = axios.create({
  // Local
  baseURL: 'http://localhost:3333'

  // Online
  // baseURL: 'https://api.jsonbin.io/b/5fd91f387e2e9559b15d3e9c'
})

export default api
