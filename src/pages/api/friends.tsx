const friends = [
  {
    name: 'roxfears',
    activity: 'Available',
    status: 'me',
    avatar: 'killjoy',
    card: 15,
    ranking: 3
  },
  {
    name: 'JohnDoe',
    activity: 'Competitive',
    status: 'Online',
    avatar: 'jett',
    card: 12,
    ranking: 1
  },
  {
    name: 'LadyDash',
    activity: 'Deathmatch',
    status: 'Online',
    avatar: 'raze',
    card: 23,
    ranking: 5
  },
  {
    name: 'Nutts',
    activity: 'Offline',
    status: 'Offline',
    avatar: 'raze',
    card: 30,
    ranking: 7
  },
  {
    name: 'Djeeeeker',
    activity: 'Offline',
    status: 'Offline',
    avatar: 'brimstone',
    card: 25,
    ranking: 12
  },
  {
    name: 'Menada',
    activity: 'Spike Run',
    status: 'Online',
    avatar: 'phoenix',
    card: 33,
    ranking: 5
  },
  {
    name: 'dimati199',
    activity: 'Competitive',
    status: 'Online',
    avatar: 'sage',
    card: 16,
    ranking: 13
  },
  {
    name: 'M9sko',
    activity: 'Competitive',
    status: 'Online',
    avatar: 'sova',
    card: 35,
    ranking: 10
  },
  {
    name: 'ClauserII',
    activity: 'Offline',
    status: 'Offline',
    avatar: 'viper',
    card: 19,
    ranking: 6
  },
  {
    name: 'FOXIlove',
    activity: 'Casual',
    status: 'Online',
    avatar: 'cypher',
    card: 11,
    ranking: 19
  },
  {
    name: 'Krenechka',
    activity: 'Casual',
    status: 'Online',
    avatar: 'reyna',
    card: 8,
    ranking: 4
  },
  {
    name: 'dimon6208',
    activity: 'Spike Run',
    status: 'Online',
    avatar: 'breach',
    card: 7,
    ranking: 14
  },
  {
    name: 'RevBANK',
    activity: 'Competitive',
    status: 'Online',
    avatar: 'omen',
    card: 10,
    ranking: 20
  },
  {
    name: 'Latinka',
    activity: 'Competitive',
    status: 'Online',
    avatar: 'skye',
    card: 22,
    ranking: 6
  },
  {
    name: 'JIbiCbiu',
    activity: 'Offline',
    status: 'Offline',
    avatar: 'brimstone',
    card: 17,
    ranking: 5
  },
  {
    name: 'Camypai',
    activity: 'Spike Run',
    status: 'Offline',
    avatar: 'phoenix',
    card: 24,
    ranking: 17
  },
  {
    name: 'Fresska',
    activity: 'Competitive',
    status: 'Offline',
    avatar: 'sage',
    card: 40,
    ranking: 22
  },
  {
    name: 'Bodxi',
    activity: 'Competitive',
    status: 'Offline',
    avatar: 'sova',
    card: 33,
    ranking: 4
  },
  {
    name: 'lovekida',
    activity: 'Offline',
    status: 'Offline',
    avatar: 'viper',
    card: 29,
    ranking: 9
  }
]

export default function handler(req, res) {
  res.status(200).json(friends)
}
