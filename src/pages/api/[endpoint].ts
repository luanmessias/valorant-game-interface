import { VercelRequest, VercelResponse } from '@vercel/node'
import data from './data.json'

export default (request: VercelRequest, response: VercelResponse) => {
  const { endpoint } = request.query
  response.json(data[endpoint])
}
