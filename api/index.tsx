import { VercelRequest, VercelResponse } from '@vercel/node'
import data from './data.json'

export default (_req: VercelRequest, res: VercelResponse) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')

  return res.json({ message: 'Hello World' })
}
