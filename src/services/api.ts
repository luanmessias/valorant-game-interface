import axios from 'axios'

const api = axios.create({
  baseURL: 'https://valorant-game-interface.vercel.app/api/'
})

export default api
