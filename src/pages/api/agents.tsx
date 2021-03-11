const agents = [
  {
    id: 1,
    name: 'brimstone',
    role: 'controller',
    biography:
      "Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance make him an unmatched boots-on-the-ground commander.",
    abilities: [
      {
        id: 1,
        name: 'incendiary',
        description:
          'EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte2b9eb1923ef64fa/5ecad7d0f5bd13348a6cac75/Brimstone_Q_v001_web.mp4'
      },
      {
        id: 2,
        name: 'sky smoke',
        description:
          'EQUIP a tactical map. FIRE to set locations where Brimstone’s smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcf4359fed083686b/5ecad7d198f79d6925dbee07/Brimstone_E_v001_web.mp4'
      },
      {
        id: 3,
        name: 'stim beacon',
        description:
          'EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc34c3d692ea83f41/5ecad7d0177c51692beb1fe4/Brimstone_C_v001_web.mp4'
      },
      {
        id: 4,
        name: 'orbital strike',
        description:
          'EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3d19d83ba51eb18f/5ecad7d297b46c1911ad1868/Brimstone_X_v001_web.mp4'
      }
    ]
  },
  {
    id: 2,
    name: 'phoenix',
    role: 'duelist',
    biography:
      "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
    abilities: [
      {
        id: 1,
        name: 'curveball',
        description:
          'EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltad7b0ea9be090042/5ecad82c2f5c7259287654ff/Phoenix_Q_v001_web.mp4'
      },
      {
        id: 2,
        name: 'hot hands',
        description:
          'EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt318f7ee7d6435fac/5ecad82cf5bd13348a6cac7d/Phoenix_E_v001_web.mp4'
      },
      {
        id: 3,
        name: 'blaze',
        description:
          'EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0ee7c9d84985ecf/5ecad82d957e405e09905751/Phoenix_C_v001_web.mp4'
      },
      {
        id: 4,
        name: 'run it back',
        description:
          'INSTANTLY place a marker at Phoenix’s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt50beaed6524c3219/5ecad82bc846021917ecbb89/Phoenix_X_v001_web.mp4'
      }
    ]
  },
  {
    id: 3,
    name: 'sage',
    role: 'sentinel',
    biography:
      'The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.',
    abilities: [
      {
        id: 1,
        name: 'slow orb',
        description:
          'EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4f4fdcc86da69972/5ecad872722d20585b2f4a44/Sage_Q_v001_web.mp4'
      },
      {
        id: 2,
        name: 'healing orb',
        description:
          'EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf1d16edc36ba3386/5ecad87152c5395e0f2dd0ea/Sage_E_v001_web.mp4'
      },
      {
        id: 3,
        name: 'barrier orb',
        description:
          'EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5a0edb670c30fbdc/5ecad8732f5c725928765507/Sage_C_v001_web.mp4'
      },
      {
        id: 4,
        name: 'resurrection',
        description:
          'EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltef1820f276fbaa0c/5ecad871957e405e09905755/Sage_X_v001_web.mp4'
      }
    ]
  },
  {
    id: 4,
    name: 'sova',
    role: 'initiator',
    biography:
      "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
    abilities: [
      {
        id: 1,
        name: 'shock bolt',
        description:
          'EQUIP a bow with a shock bolt. FIRE to send the explosive forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7af29765c99f807d/5ecad882722d20585b2f4a48/Sova_Q_v001_web.mp4'
      },
      {
        id: 2,
        name: 'recon bolt',
        description:
          'EQUIP a bow with a recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt44b27c0d688217db/5ecad88398f79d6925dbee21/Sova_E_v001_web.mp4'
      },
      {
        id: 3,
        name: 'owl drone',
        description:
          'EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt07d2025ac5dcd792/5ecad883f5bd13348a6cac89/Sova_C_v001_web.mp4'
      },
      {
        id: 4,
        name: "hunter's fury",
        description:
          'EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf9fc34106a23479c/5ecad88397b46c1911ad1872/Sova_X_v001_web.mp4'
      }
    ]
  },
  {
    id: 5,
    name: 'viper',
    role: 'controller',
    biography:
      "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will.",
    abilities: [
      {
        id: 1,
        name: 'poison cloud',
        description:
          'EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5200bab40679f96/5ecad8935e73766852c8ed94/Viper_Q_v001_web.mp4'
      },
      {
        id: 2,
        name: 'toxic screen',
        description:
          'EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt66a45c1fe76ca647/5ecad893957e405e0990575d/Viper_E_v001_web.mp4'
      },
      {
        id: 3,
        name: 'snake bite',
        description:
          'EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5e70987e8ac2f2d6/5ecad893722d20585b2f4a4c/Viper_C_v001_web.mp4'
      },
      {
        id: 4,
        name: "viper's pit",
        description:
          'EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt41c75111b2eac6b5/5ecad8923a450a58554b7078/Viper_X_v001_web.mp4'
      }
    ]
  },
  {
    id: 6,
    name: 'cypher',
    role: 'sentinel',
    biography:
      "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
    abilities: [
      {
        id: 1,
        name: 'cyber cage',
        description:
          "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt019fa05d6b7fddef/5ecad7e597b46c1911ad186c/Cypher_Q_v001_web.mp4'
      },
      {
        id: 2,
        name: 'spycam',
        description:
          'EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera’s view. While in control of the camera, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt47c03800823ce304/5ecad7e64a28e119db562296/Cypher_E_v001_web.mp4'
      },
      {
        id: 3,
        name: 'trapewire',
        description:
          'EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9b7d004dc573791c/5ecad7e85e73766852c8ed8c/Cypher_C_v001_web.mp4'
      },
      {
        id: 4,
        name: 'neural theft',
        description:
          'INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29f3571576a3937f/5ecad7e5e2a559592eb0c1b0/Cypher_X_v001_web.mp4'
      }
    ]
  },
  {
    id: 7,
    name: 'reyna',
    role: 'duelist',
    biography:
      'Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.',
    abilities: [
      {
        id: 1,
        name: 'devour',
        description:
          'Enemies killed by Reyna leave behind Soul Orbs that last 3 seconds. INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the orb.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb216220f42c804e2/5ecad85d4a28e119db5622a8/Reyna_Q_v001_web.mp4'
      },
      {
        id: 2,
        name: 'dismiss',
        description:
          'INSTANTLY consume a nearby soul orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt77e99ec99ef3a839/5ecad85e2f5c725928765503/Reyna_E_v002_web.mp4'
      },
      {
        id: 3,
        name: 'leer',
        description:
          'EQUIP an ethereal destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf6109b8be97e8d96/5ecad85db42d3333c95dd1b2/Reyna_C_v002_web.mp4'
      },
      {
        id: 4,
        name: 'empress',
        description:
          'INSTANTLY enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltadf53a38e449cb4d/5ecad85cbab1845d392dfd0f/Reyna_X_v001_web.mp4'
      }
    ]
  },
  {
    id: 8,
    name: 'killjoy',
    role: 'sentinel',
    biography:
      "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.",
    abilities: [
      {
        id: 1,
        name: 'alarmbot',
        description:
          'EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes, applying Vulernable. HOLD EQUIP to recall a deployed bot.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9a8fa11ac887550e/5f2203522f812a7c016f5651/AlarmBot_LowQuality.mp4'
      },
      {
        id: 2,
        name: 'turret',
        description:
          'EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0fe3462ae9a025a4/5f220396074360086ccdd908/Turret_LowQuality.mp4'
      },
      {
        id: 3,
        name: 'nanoswarm',
        description:
          'EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4aed833e1b0df155/5f2204694be7297d7e6c8449/Grenade_LowQuality.mp4'
      },
      {
        id: 4,
        name: 'lockdown',
        description:
          'EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf74d72b162a14692/5f2204ab8ff50d070ad2d192/Ultimate_LowQualityV02.mp4'
      }
    ]
  },
  {
    id: 9,
    name: 'breach',
    role: 'initiator',
    biography:
      'Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.',
    abilities: [
      {
        id: 1,
        name: 'flashpoint',
        description:
          'EQUIP a blinding charge. FIRE the charge to set fast-acting burst through the wall. The charge detonates to blind all players looking at it.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc2d5631f1babcaf0/5ec840e1bab1845d392dfc39/Breach_Q_v001_web.mp4'
      },
      {
        id: 2,
        name: 'fault line',
        description:
          'EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd09eb47222cc1152/5ec840e287617619e2be955e/Breach_E_v001_web.mp4'
      },
      {
        id: 3,
        name: 'aftershock',
        description:
          'EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfff097ebc7da90e9/5ec840e1e2a559592eb0c0e2/Breach_C_v001_web.mp4'
      },
      {
        id: 4,
        name: 'rolling thunder',
        description:
          'EQUIP a seismic charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0a47675f8b973fda/5ec840e252c5395e0f2dd038/Breach_X_v001_web.mp4'
      }
    ]
  },
  {
    id: 10,
    name: 'omen',
    role: 'controller',
    biography:
      'A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.',
    abilities: [
      {
        id: 1,
        name: 'paranoia',
        description:
          'INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5babc7e7c6c24fa0/5ecad8154a28e119db56229e/Omen_Q_v001_web.mp4'
      },
      {
        id: 2,
        name: 'dark cover',
        description:
          'EQUIP a shadow orb and see its range indicator. FIRE to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD ALTERNATE FIRE while targeting to move the marker further away. HOLD the ability key with targeting to move the market closer.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt70e2c9db1c0793df/5ecad815c846021917ecbb85/Omen_E_v001_web.mp4'
      },
      {
        id: 3,
        name: 'shrouded step',
        description:
          'EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63486e54ea52945a/5ecad815bab1845d392dfd07/Omen_C_v001_web.mp4'
      },
      {
        id: 4,
        name: 'from the shadows',
        description:
          'EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt65aa85bf6ba5c0e8/5ecad814a4fe135d37f021a3/Omen_X_v001_web.mp4'
      }
    ]
  },
  {
    id: 11,
    name: 'jett',
    role: 'duelist',
    biography:
      "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
    abilities: [
      {
        id: 1,
        name: 'updraft',
        description: 'INSTANTLY propel Jett high into the air.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
      },
      {
        id: 2,
        name: 'tailwind',
        description:
          'INSTANTLY propel Jett in the direction she is moving. If Jett is standing still, she will propel forward.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
      },
      {
        id: 3,
        name: 'cloudburst',
        description:
          'INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
      },
      {
        id: 4,
        name: 'blade storm',
        description:
          'EQUIP a set of highly accurate knives that recharge on killing an opponent. FIRE to throw a single knife at your target. ALTERNATE FIRE to throw all remaining daggers at your target.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
      }
    ]
  },
  {
    id: 12,
    name: 'raze',
    role: 'duelist',
    biography:
      'Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”',
    abilities: [
      {
        id: 1,
        name: 'blast pack',
        description:
          "INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit. Raze isn't damaged by this ability, but will still take fall damage if launched up far enough.",
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf3581aedf43e1ce8/5ecad83cc846021917ecbb8d/Raze_Q_v001_web.mp4'
      },
      {
        id: 2,
        name: 'paint shells',
        description:
          'EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfe61b821c26125b7/5ecad83be2a559592eb0c1ba/Raze_E_v001_web.mp4'
      },
      {
        id: 3,
        name: 'boom bot',
        description:
          'EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3f7d7ee195ecedca/5ecad83c52c5395e0f2dd0e4/Raze_C_v001_web.mp4'
      },
      {
        id: 4,
        name: 'showstopper',
        description:
          'EQUIP a rocket launcher. FIRE shoots a rocket that does massive area damage on contact with anything.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15aa9cb086aed1a/5ecad83c4a28e119db5622a2/Raze_X_v001_web.mp4'
      }
    ]
  },
  {
    id: 13,
    name: 'skye',
    role: 'initiator',
    biography:
      'Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye’s side.',
    abilities: [
      {
        id: 1,
        name: 'trailblazer',
        description:
          'EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a concussive blast and damaging directly hit enemies.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt90a6f2733b96ce16/5f7faa7dd4fbb50ef307791e/Val_Skye_Q_Ability_Web.mp4'
      },
      {
        id: 2,
        name: 'guiding light',
        description:
          'EQUIP a hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash that plays a hit confirm if an enemy was within range and line of sight.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8ecea4a77a26c25b/5f7fab7adf178b0ea98495a5/Val_Skye_E_Ability_Web.mp4'
      },
      {
        id: 3,
        name: 'regrowth',
        description:
          'EQUIP a healing trinket. HOLD FIRE to channel, healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0f5403509070a0a2/5f7fabc5879de80eb41b1f33/Val_Skye_C_Ability_Web.mp4'
      },
      {
        id: 4,
        name: 'seekers',
        description:
          'EQUIP a Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it nearsights them.',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt966535853a54c58c/5f7fac19df178b0ea98495ad/Val_Skye_X_Ability_Web.mp4'
      }
    ]
  }
]

export default function handler(req, res) {
  res.status(200).json(agents)
}