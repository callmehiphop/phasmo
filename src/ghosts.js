import Evidence from 'evidence';

const ghosts = [
  {
    name: 'Spirit',
    evidence: [
      Evidence.EMF_LEVEL_5,
      Evidence.SPIRIT_BOX,
      Evidence.GHOST_WRITING,
    ],
    description:
      'Spirits are very common ghosts. They are very powerful, but passive, only attacking when they need to. They defend their place of death to the utmost degree, killing anyone that is caught overstaying their welcome.',
    strength: null,
    weakness:
      'A Spirit can be temporarily stopped by burning Smudge Sticks near them.',
  },
  {
    name: 'Wraith',
    evidence: [
      Evidence.EMF_LEVEL_5,
      Evidence.SPIRIT_BOX,
      Evidence.DOTS_PROJECTOR,
    ],
    description:
      'Wraiths are one of the most dangerous ghosts you will find. It is also the only known ghost that has the ability of flight and has sometimes been known to travel through walls.',
    strength:
      "Wraiths almost never touch the ground, meaning it can't be tracked by footsteps",
    weakness: 'Wraiths have a toxic reaction to Salt.',
  },
  {
    name: 'Phantom',
    evidence: [
      Evidence.SPIRIT_BOX,
      Evidence.FINGERPRINTS,
      Evidence.DOTS_PROJECTOR,
    ],
    description:
      'A Phantom is a ghost that can possess the living, inducing fear into those around it. They are most commonly summoned from Ouija Boards.',
    strength: 'Looking at a Phantom will drop your sanity considerably faster.',
    weakness:
      'Taking a photo of the Phantom will make it temporarily disappear.',
  },
  {
    name: 'Poltergeist',
    evidence: [
      Evidence.SPIRIT_BOX,
      Evidence.FINGERPRINTS,
      Evidence.GHOST_WRITING,
    ],
    description:
      'One of the most famous ghosts, the Poltergeist. Known to manipulate objects around it to spread fear into its victims.',
    strength:
      'Poltergeists can throw multiple objects at once, and with great force.',
    weakness: 'With nothing to throw, Poltergeists become powerless.',
  },
  {
    name: 'Banshee',
    evidence: [
      Evidence.FINGERPRINTS,
      Evidence.GHOST_ORB,
      Evidence.DOTS_PROJECTOR,
    ],
    description:
      'The singing siren, known for attracting its victims through song. It has been known to single out its prey before making a killing blow.',
    strength: "Banshee's will weaken their target before striking.",
    weakness:
      "Banshee's can sometimes be heard screaming with a parabolic microphone.",
  },
  {
    name: 'Jinn',
    evidence: [
      Evidence.EMF_LEVEL_5,
      Evidence.FINGERPRINTS,
      Evidence.FREEZING_TEMPS,
    ],
    description:
      'A Jinn is a territorial ghost that will attack when threatened. It has also been known to be able to travel at significant speed.',
    strength: 'A Jinn will travel at a faster speed if its victim is far away.',
    weakness:
      "Turning off the location's power source will prevent the Jinn from using its ability.",
  },
  {
    name: 'Mare',
    evidence: [Evidence.SPIRIT_BOX, Evidence.GHOST_ORB, Evidence.GHOST_WRITING],
    description:
      'A Mare is the source of all nightmares, making it most powerful in the dark.',
    strength: 'A Mare will have an increased chance to attack in the dark.',
    weakness:
      'Turning the lights on around the Mare will lower its chance to attack.',
  },
  {
    name: 'Revenant',
    evidence: [
      Evidence.GHOST_ORB,
      Evidence.GHOST_WRITING,
      Evidence.FREEZING_TEMPS,
    ],
    description:
      'A Revenant is a violent ghost that will attack indiscriminately. Their speed can be deceiving, as they are slow will dormant; however, as soon as they hunt they can move incredibly fast.',
    strength:
      'A Revenant will travel at a significantly faster speed when hunting their prey.',
    weakness: 'Hiding from the Revenant will cause it to move very slowly.',
  },
  {
    name: 'Shade',
    evidence: [
      Evidence.EMF_LEVEL_5,
      Evidence.GHOST_WRITING,
      Evidence.FREEZING_TEMPS,
    ],
    description:
      'A Shade is known to be very shy. There is evidence to suggest that a Shade will stop all paranomrmal activity if there are multiple people nerby.',
    strength: 'Shades are much harder to find.',
    weakness:
      'The ghost will not enter a hunt if there are multiple people nearby.',
  },
  {
    name: 'Demon',
    evidence: [
      Evidence.FINGERPRINTS,
      Evidence.GHOST_WRITING,
      Evidence.FREEZING_TEMPS,
    ],
    description:
      "Demons are the most aggressive ghosts we've ever encountered. Known to attack without reason, they seem to enjoy the thrill of the hunt.",
    strength: 'Demons will initiate hunts more often than other ghosts.',
    weakness: 'Demons fear the Crucifix and will be less aggressive near one.',
  },
  {
    name: 'Yurei',
    evidence: [
      Evidence.GHOST_ORB,
      Evidence.FREEZING_TEMPS,
      Evidence.DOTS_PROJECTOR,
    ],
    description:
      'A Yurei is a ghost that has returned to the physical world, usually for the purpose of revenge or hatred.',
    strength:
      "Yureis have been known to have a stronger effect on people's sanity.",
    weakness:
      "Smudging the Yurei's place of death will trap it temporarily, reducing how much it wanders.",
  },
  {
    name: 'Oni',
    evidence: [
      Evidence.EMF_LEVEL_5,
      Evidence.FREEZING_TEMPS,
      Evidence.DOTS_PROJECTOR,
    ],
    description:
      'Onis love to scare their victims as much as possible before attacking. They are often seen in their physical form, guarding their place of death.',
    strength:
      'Oni are much more active whilst people are nearby and will drain their sanity faster when manifesting.',
    weakness: 'Oni disappear less often while hunting their prey.',
  },
  {
    name: 'Yokai',
    evidence: [
      Evidence.SPIRIT_BOX,
      Evidence.GHOST_ORB,
      Evidence.DOTS_PROJECTOR,
    ],
    description:
      'Yokai are common ghosts that are attracted to human voices. They can usually be found haunting family homes.',
    strength:
      'Talking near a Yokai will anger it, increasing the chance of an attack.',
    weakness: 'When hunting, a Yokai can only hear voices close to it.',
  },
  {
    name: 'Hantu',
    evidence: [
      Evidence.FINGERPRINTS,
      Evidence.GHOST_ORB,
      Evidence.FREEZING_TEMPS,
    ],
    description:
      'A Hantu is a rare ghost that thrives in the coldest climates. The cold seems to make them more aggressive and empowered.',
    strength: 'Lower temperatures allow the Hantu to move at faster speeds.',
    weakness: 'Hantus move slower in warmer areas.',
  },
  {
    name: 'Goryo',
    evidence: [
      Evidence.EMF_LEVEL_5,
      Evidence.FINGERPRINTS,
      Evidence.DOTS_PROJECTOR,
    ],
    description:
      'When a Goryo passes trough a DOTS projector, using a video camera is the only way to see it.',
    strength:
      'A Goryo will usually only show itself on camera if there are no people nearby.',
    weakness: 'They are rarely seen far from their place of death.',
  },
  {
    name: 'Myling',
    evidence: [
      Evidence.EMF_LEVEL_5,
      Evidence.FINGERPRINTS,
      Evidence.GHOST_WRITING,
    ],
    description:
      'A Myling is a very vocal and active ghost. They are rumoured to be quiet when hunting their prey.',
    strength: 'A Myling is known to be quieter when hunting.',
    weakness: 'Mylings more frequently make paranormal sounds.',
  },
  {
    name: 'Onryo',
    evidence: [
      Evidence.SPIRIT_BOX,
      Evidence.GHOST_ORB,
      Evidence.FREEZING_TEMPS,
    ],
    description:
      'The Onryo is often referred to as "The Wrathful Spirit". It steals souls from dying victims\' bodies to seek revenge. This ghost has been known to fear any form of fire, and will do anything to be far from it.',
    strength: 'Extinguishing a flame can cause an Onryo to attack.',
    weakness: 'When threatened, this ghost will be less likely to hunt.',
  },
  {
    name: 'The Twins',
    evidence: [
      Evidence.EMF_LEVEL_5,
      Evidence.SPIRIT_BOX,
      Evidence.FREEZING_TEMPS,
    ],
    description:
      "These ghosts have been reported to mimic each other's actions. They alternate their attacks to confuse their prey.",
    strength:
      'Either Twin can be angered and initiate an attack on their prey.',
    weakness:
      'The Twins will often interact with the environment at the same time.',
  },
  {
    name: 'Raiju',
    evidence: [
      Evidence.EMF_LEVEL_5,
      Evidence.GHOST_ORB,
      Evidence.DOTS_PROJECTOR,
    ],
    description:
      'A Raiju is a demon that thrives on electrical current. While generally calm, they can become agitated when overhwlemed with power.',
    strength:
      'A Raiju can siphon power from nearby electrical devices, making it move faster.',
    weakness:
      'Raiju are constantly disrupting electronic equipment when attacking, making it easier to track.',
  },
  {
    name: 'Obake',
    evidence: [Evidence.EMF_LEVEL_5, Evidence.FINGERPRINTS, Evidence.GHOST_ORB],
    description:
      'Obake are terrifying shape-shifters, capable of taking on many forms. They have been seen taking on humanoid shapes to attract their prey.',
    strength:
      'When interacting with the environment, an Obake will rarely leave a trace.',
    weakness:
      'Sometimes this ghost will shapeshift, leaving behind unique evidence.',
  },
  {
    name: 'The Mimic',
    evidence: [
      Evidence.SPIRIT_BOX,
      Evidence.FINGERPRINTS,
      Evidence.FREEZING_TEMPS,
    ],
    description:
      'The Mimic is an elusive, mysterious, copycat ghost that mirrors traits and behaviours from others, including other ghost types.',
    strength: "We're unsure what this ghost is capable of. Be careful.",
    weakness: 'Several reports have noted ghost orb sightings near mimics.',
  },
  {
    name: 'Moroi',
    evidence: [
      Evidence.SPIRIT_BOX,
      Evidence.GHOST_WRITING,
      Evidence.FREEZING_TEMPS,
    ],
    description:
      'Moroi have risen from the grave to drain energy from the living. They have been known to place curses on their victims, curable only by antidotes or moving very far away.',
    strength: 'The weaker their victims, the stronger the Moroi becomes.',
    weakness: 'Moroi suffer from hyperosmia, weakning them for longer periods.',
  },
  {
    name: 'Deogen',
    evidence: [
      Evidence.SPIRIT_BOX,
      Evidence.GHOST_WRITING,
      Evidence.DOTS_PROJECTOR,
    ],
    description:
      'Sometimes surrounded by an endless fog, Deogen have been eluding ghost hunters for years.\nThese ghosts have been reported to find even the most hidden prey, before stalking them into exhaustion.',
    strength:
      "Deogen constantly sense the living. You can run but you can't hide.",
    weakness:
      'Deogen require a lot of energy to form and will move very slowly when approaching its victim.',
  },
  {
    name: 'Thaye',
    evidence: [
      Evidence.GHOST_ORB,
      Evidence.GHOST_WRITING,
      Evidence.DOTS_PROJECTOR,
    ],
    description:
      "Thaye have been known to rapidly age over time, even in the afterlife. From what we've learned, they seem to deteriorate faster while within the presence of the living.",
    strength:
      'Upon entering the location, Thaye will become active, defensive and agile.',
    weakness:
      'Thaye will weaken over time, making them weaker, slower and less aggressive.',
  },
];

export default ghosts;
