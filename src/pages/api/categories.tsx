const categories = [
  {
    id: 'init',
    url: '/',
    title: 'inicio'
  },
  {
    id: 'agents',
    url: '/agents/brimstone',
    title: 'agentes'
  },
  {
    id: 'play',
    url: '/play',
    title: 'jogar'
  },
  {
    id: 'carrier',
    url: '/carrier',
    title: 'carreira'
  },
  {
    id: 'collection',
    url: '/collection',
    title: 'colecao'
  }
]

export default function handler(req, res) {
  res.status(200).json(categories)
}
