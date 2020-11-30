import axios from 'axios'

const api = axios.create({
  // Local
  // baseURL: 'http://localhost:3333'

  // Online
  baseURL: 'https://uiclone-valorant.free.beeceptor.com'
})

export default api
