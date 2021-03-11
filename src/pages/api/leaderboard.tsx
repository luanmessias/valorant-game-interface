const leaderboard = [
  {
    name: 'roxfears',
    position: 1,
    rank: 14,
    rating: 925,
    team: 'ALL STAR',
    won: 138
  },
  {
    name: 'JohnDoe',
    position: 2,
    rank: 4,
    rating: 920,
    team: 'WRAITH',
    won: 130
  },
  {
    name: 'LadyDash',
    position: 3,
    rank: 5,
    rating: 915,
    team: 'TOXIC',
    won: 125
  },
  {
    name: 'Nutts',
    position: 4,
    rank: 6,
    rating: 910,
    team: 'UNMASKED',
    won: 120
  },
  {
    name: 'Djeeeeker',
    position: 5,
    rank: 11,
    rating: 905,
    team: 'UNMASKED',
    won: 115
  },
  {
    name: 'Menada',
    position: 6,
    rank: 13,
    rating: 900,
    team: null,
    won: 110
  },
  {
    name: 'dimati199',
    position: 7,
    rank: 11,
    rating: 895,
    team: 'SWIFT',
    won: 105
  },
  {
    name: 'M9sko',
    position: 8,
    rank: 15,
    rating: 890,
    team: 'ALL STAR',
    won: 100
  },
  {
    name: 'ClauserII',
    position: 9,
    rank: 15,
    rating: 890,
    team: 'ALL STAR',
    won: 100
  },
  {
    name: 'FOXIlove',
    position: 10,
    rank: 7,
    rating: 885,
    team: 'ALL STAR',
    won: 95
  },
  {
    name: 'Krenechka',
    position: 11,
    rank: 6,
    rating: 880,
    team: null,
    won: 90
  },
  {
    name: 'dimon6208',
    position: 12,
    rank: 10,
    rating: 875,
    team: null,
    won: 85
  },
  {
    name: 'RevBANK',
    position: 13,
    rank: 10,
    rating: 875,
    team: null,
    won: 85
  },
  {
    name: 'Latinka',
    position: 14,
    rank: 15,
    rating: 870,
    team: 'TOXIC',
    won: 80
  },
  {
    name: 'JIbiCbiu',
    position: 15,
    rank: 2,
    rating: 865,
    team: 'ALL STAR',
    won: 75
  },
  {
    name: 'Camypai',
    position: 16,
    rank: 5,
    rating: 860,
    team: 'ALL STAR',
    won: 70
  },
  {
    name: 'Fresska',
    position: 17,
    rank: 7,
    rating: 855,
    team: 'UNMASKED',
    won: 65
  },
  {
    name: 'Bodxi',
    position: 18,
    rank: 3,
    rating: 850,
    team: 'TOXIC',
    won: 60
  },
  {
    name: 'lovekida',
    position: 19,
    rank: 8,
    rating: 845,
    team: 'WRAITH',
    won: 55
  }
]

export default function handler(req, res) {
  res.status(200).json(leaderboard)
}
