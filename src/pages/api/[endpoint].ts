import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'
import data from './data.json'

const cors = initMiddleware(
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET']
  })
)

export default async function handler(req, res) {
  const { endpoint } = req.query
  await cors(req, res)
  res.json(data[endpoint])
}
