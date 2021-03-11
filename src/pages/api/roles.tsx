const roles = [
  {
    name: 'sentinel',
    description:
      'Sentinels are defensive experts that have abilities that manipulate the battlefield, lock-down areas of contention and provide utility such as healing. \n There are currently two Sentinels in VALORANT, Sage and Cypher. \n Sentinels will either move around the map to gather more information or when defending, be an anchor on a bombsite with the goal to slow down opponents so that teammates have enough time to provide assistance. \n Due to the passive nature of their abilities, players that use Sentinel agents are typically responsible for being the in-game leader (IGL). \n The IGL is responsible for outlining overall team strategy, coordinating team movements around the map and ensuring teammates communicate enemy locations effectively. \n Sentinels aren’t expected to perform as well on the scoreboard when contrasted against their Controller and Duelist counter-parts, instead their primary purpose is to enable their teammates to shine while they work quietly in the background.'
  },
  {
    name: 'controller',
    description:
      'Controllers are experts at controlling the battlefield by the use of smoke screens. \n Their abilities aim to disrupt their opponents sightlines whilst providing cover for teammates as they take control of an area. \n There are currently three controllers in VALORANT: Omen, Viper and Brimstone. \n As mentioned previously, the primary responsibility for Controllers is the ability to control sightlines on a map, this is important in VALORANT because it narrows down the possibilities an enemy has to engage a teammate from a favourable position. \n Controllers such as Viper and Brimstone will typically use their abilities prior to a team executing a strategy on a bombsite, following the Duelists on their team as a Secondary Entry Fragger once they’ve used their smoke screens. \n Alternatively, Controllers can act as lurkers, who are responsible for guarding against enemy flanks or performing a flank of their own. \n The agent known as ‘Omen’ is a proficient lurker with an ultimate ability that allows him to teleport to any location on the map, making him particularly deadly when infiltrating the backlines of the enemy.'
  },
  {
    name: 'duelist',
    description:
      'Duelists are the offensive experts in VALORANT with abilities that allow them to be aggressive and self-sufficient when creating opportunities to engage with opponents. \n There are currently four Duelists in the game: Jett, Phoenix, Raze and Reyna. \n Duelists are expected by their teammates to be proactive and are the stars within the team that garner the most amount of kills. \n They will typically fulfill the role of Entry Fragger, being the first person to enter an area of the map in contention and perform high-risk, high-reward actions to gain an advantage. \n The Duelist role is particularly volatile and leads to players experiencing a feast-or-famine scenario in performance, thus teams should give these roles to teammates with excellent aim. \n With more team focused gameplay when compared to CS:GO, Duelists in VALORANT should leverage the supporting abilities from Sentinels, Controllers and Initiators to maximise their own potential to dominate opponents.'
  },
  {
    name: 'initiator',
    description:
      'Initiators excel at gathering information and controlling the movements of opponents through the use of their abilities. \n There are currently two Initiators: Breach and Sova. \n The two Initiators in VALORANT are both unique in their own regard with Sova specialising in performing reconnaissance while his counterpart Breach specialises in crowd control. \n With Sova’s drone and bow abilities, he’s able to recon areas of the map where the opponents may be contesting and conveying this information to his team. \n Breach on the other hand uses his abilities to flush out and disrupt opponents in hard to reach locations from relative safety. \n While Initiators are in a category of their own, they could easily perform the defensive playstyle of a Sentinel and Controller, or take a more proactive role like a Duelist.'
  }
]

export default function handler(req, res) {
  res.status(200).json(roles)
}
