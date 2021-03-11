import axios from 'axios'

const api = axios.create({
  // Local
  // baseURL: 'http://localhost:3000/api/'
  // Online
  baseURL: 'https://valorant-game-interface.vercel.app/api/'
})

export default api
