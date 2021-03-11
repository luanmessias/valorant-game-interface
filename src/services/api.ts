import axios from 'axios'

const api = axios.create({
  // Local
  // baseURL: 'http://localhost:3000/api/'
  // Online
  baseURL: 'https://vercel.com/luanmessias/valorant-game-interface/api/'
})

export default api
