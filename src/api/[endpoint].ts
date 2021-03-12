import data from './data.json'

export default function dataHandler(req, res) {
  const { endpoint } = req.query

  res.status(200).json(data[endpoint])
}
