const game_modes = [
  {
    id: 'ranked',
    position: 1,
    title: 'RANKED MATH',
    time: '30-40 min'
  },
  {
    id: 'casual',
    position: 2,
    title: 'CASUAL MATH',
    time: '30-40 min'
  },
  {
    id: 'spike',
    position: 3,
    title: 'SPIKE RUN',
    time: '30-40 min'
  },
  {
    id: 'dm',
    position: 4,
    title: 'DEATH MATH',
    time: '30-40 min'
  }
]

export default function handler(req, res) {
  res.status(200).json(game_modes)
}
