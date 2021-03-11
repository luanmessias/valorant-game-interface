const cards = [
  {
    id: 1,
    url:
      'https://cdn.valorantinfo.gg/img/cards/tall/Versus%20Raze%20Killjoy.jpg'
  },
  {
    id: 2,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/VALORANT%20Viper.jpg'
  },
  {
    id: 3,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/Blastx.jpg'
  },
  {
    id: 4,
    url:
      'https://cdn.valorantinfo.gg/img/cards/tall/What%20Ancient%20Mystery.jpg'
  },
  {
    id: 5,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/Vertraulich.jpg'
  },
  {
    id: 6,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/VALORANT%20Viper.jpg'
  },
  {
    id: 7,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/VALORANT%20Sova.jpg'
  },
  {
    id: 8,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/VALORANT%20Skye.jpg'
  },
  {
    id: 9,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/VALORANT%20Sage.jpg'
  },
  {
    id: 10,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/VALORANT%20Reyna.jpg'
  },
  {
    id: 11,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/VALORANT%20Raze.jpg'
  },
  {
    id: 12,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/VALORANT%20Phoenix.jpg'
  },
  {
    id: 13,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/VALORANT%20Omen.jpg'
  },
  {
    id: 14,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/VALORANT%20Mascot.jpg'
  },
  {
    id: 15,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/VALORANT%20Killjoy.jpg'
  },
  {
    id: 16,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/VALORANT%20Jett.jpg'
  },
  {
    id: 17,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/VALORANT%20Cypher.jpg'
  },
  {
    id: 18,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/VALORANT%20Brimstone.jpg'
  },
  {
    id: 19,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/VALORANT%20Breach.jpg'
  },
  {
    id: 20,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/VALORANT.jpg'
  },
  {
    id: 21,
    url:
      'https://cdn.valorantinfo.gg/img/cards/tall/Through%20The%20Looking%20Glass.jpg'
  },
  {
    id: 22,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/The%20Way%20Forward.jpg'
  },
  {
    id: 23,
    url:
      'https://cdn.valorantinfo.gg/img/cards/tall/The%20Great%20Reclaimer.jpg'
  },
  {
    id: 24,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/Spline.jpg'
  },
  {
    id: 25,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/Sovereign.jpg'
  },
  {
    id: 26,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/Skye%20ID.jpg'
  },
  {
    id: 27,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/Secret%20Lineage.jpg'
  },
  {
    id: 28,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/Rising%20up.jpg'
  },
  {
    id: 29,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/Reyna%20ID.jpg'
  },
  {
    id: 30,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/Revenge%20for%20Life.jpg'
  },
  {
    id: 31,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/Spline.jpg'
  },
  {
    id: 32,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/Radianite%20Hazard.jpg'
  },
  {
    id: 33,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/Prime.jpg'
  },
  {
    id: 34,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/Polyfox.jpg'
  },
  {
    id: 35,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/One%20Dark%20Night.jpg'
  },
  {
    id: 36,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/Nachtelang.jpg'
  },
  {
    id: 37,
    url:
      'https://cdn.valorantinfo.gg/img/cards/tall/No%20One%20Left%20Behind.jpg'
  },
  {
    id: 38,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/New%20Recruit.jpg'
  },
  {
    id: 39,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/Mirrored%20Edge.jpg'
  },
  {
    id: 40,
    url: 'https://cdn.valorantinfo.gg/img/cards/tall/Chicken%20Noir.jpg'
  }
]

export default function handler(req, res) {
  res.status(200).json(cards)
}
