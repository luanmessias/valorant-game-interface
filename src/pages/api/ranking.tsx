const ranking = [
  {
    id: 1,
    name: 'Iron I',
    img: 'iron-1.png'
  },
  {
    id: 2,
    name: 'Iron II',
    img: 'iron-2.png'
  },
  {
    id: 3,
    name: 'Iron III',
    img: 'iron-3.png'
  },
  {
    id: 4,
    name: 'Bronze I',
    img: 'bronze-1.png'
  },
  {
    id: 5,
    name: 'Bronze II',
    img: 'bronze-2.png'
  },
  {
    id: 6,
    name: 'Bronze III',
    img: 'bronze-3.png'
  },
  {
    id: 7,
    name: 'Silver I',
    img: 'silver-1.png'
  },
  {
    id: 8,
    name: 'Silver II',
    img: 'silver-2.png'
  },
  {
    id: 9,
    name: 'Silver III',
    img: 'silver-3.png'
  },
  {
    id: 10,
    name: 'Gold I',
    img: 'gold-1.png'
  },
  {
    id: 11,
    name: 'Gold II',
    img: 'gold-2.png'
  },
  {
    id: 12,
    name: 'Gold III',
    img: 'gold-3.png'
  },
  {
    id: 13,
    name: 'Platinum I',
    img: 'platinum-1.png'
  },
  {
    id: 14,
    name: 'Platinum II',
    img: 'platinum-2.png'
  },
  {
    id: 15,
    name: 'Platinum III',
    img: 'platinum-3.png'
  },
  {
    id: 16,
    name: 'Diamond I',
    img: 'diamond-1.png'
  },
  {
    id: 17,
    name: 'Diamond II',
    img: 'diamond-2.png'
  },
  {
    id: 18,
    name: 'Diamond III',
    img: 'diamond-3.png'
  },
  {
    id: 19,
    name: 'Immortal I',
    img: 'immortal-1.png'
  },
  {
    id: 20,
    name: 'Immortal II',
    img: 'immortal-2.png'
  },
  {
    id: 21,
    name: 'Immortal III',
    img: 'immortal-3.png'
  },
  {
    id: 22,
    name: 'Valorant',
    img: 'valorant.png'
  }
]

export default function handler(req, res) {
  res.status(200).json(ranking)
}
