import axios from 'axios'

const api = axios.create({
  // Local
  // baseURL: 'http://localhost:3333'

  // Online
  baseURL: 'https://5fc551e336bc790016344a80.mockapi.io/valorant/'
})

export default api
