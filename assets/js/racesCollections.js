[
  {
    _id: "dwarfRace",
    index: 1,
    name: "Dwarf",
    speed: 25,
    statsBonus: {
      statIncrease: [0, 2, 0, 0, 0, 0],
      desc: ["Your Constitution score increases by 2."]
    },
    genericTraits: [
      {
        alignment: "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order."
      },
      {
        age: "Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years."
      },
      {
        size: "Medium"
      },
      {
        size_description: "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium."
      },
      {
        language_desc: "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak."
      }
    ],

    startingProficiencies: [
      {
        name: "Battleaxes",
      },
      {
        name: "Handaxes",
      },
      {
        name: "Light hammers",
      },
      {
        name: "Warhammers",
      },
      {
        from: [
          {
            name: "Smith's tools",
          },
          {
            name: "Brewer's supplies",
          },
          {
            name: "Mason's tools",
          }
        ],
        type: "proficiency",
        choose: 1
      }
    ],
    languages: [
      {
        name: "Common",
      },
      {
        name: "Dwarvish",
      }
    ],

    racialTraits: [
      {
        name: "Darkvision (Dwarf)",
		desc:"Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
      },
      {
        name: "Dwarven Resilience",
		desc: "You have advantage on saving throws against poison, and you have resistance against poison damage."
      },
      {
        name: "Stonecunning",
		desc: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
      }
    ],
    subraces: [
      {
        name: "Hill Dwarf",
        desc: "As a hill dwarf, you have keen senses, deep intuition,and remarkable resilience.",
        traits: "Dwarven Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.",
        statsBonus: {
          statIncrease: [0, 0, 0, 0, 1, 0],
          desc: ["Your Wisdom score increases by 1."]
        }
      },
      {
        name: "Mountain Dwarf",
        desc: " As a mountain dwarf, you're strong and hardy, accustomed to a difficult life in rugged terrain. You’re probably on the tall side (for a dwarf), and tend toward lighter coloration.",
        traits: "Dwarven Armor Training: You have proficiency with light and medium armor",
        statsBonus: {
          statIncrease: [1, 0, 0, 0, 0, 0],
          desc: ["Your Strength score increases by 1."]
        }
      }
    ],
  },
  {
    _id: "elfRace",
    index: 2,
    name: "Elf",
    speed: 30,
    statsBonus: {
      statIncrease: [0, 2, 0, 0, 0, 0],
      desc: ["Your Dexterity score increases by 2."]
    },
    genericTraits: [
      {
        alignment: "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others’ freedom as well as their own, and they are more often good than not. The Drow are an exception; their exile has made them vicious and dangerous. Drow are more often evil than not."
      },
      {
        age: "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old."
      },
      {
        size: "Medium"
      },
      {
        size_description: "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium."
      },
      {
        language_desc: "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires."
      }
    ],
    startingProficiencies: [
      {
        name: "Skill: Perception",
      }
    ],
    languages: [
      {
        name: "Common",
      },
      {
        name: "Elvish",
      }
    ],

    traits: [
      {
        name: "Darkvision (Elf)"
      },
      {
        name: "Fey Ancestry"
      },
      {
        name: "Trance"
      }
    ],
    subraces: [
      {
        name: "High Elf",
      }
    ],
  },
  {
    _id: "halflingRace",
    index: 3,
    name: "Halfling",
    speed: 25,
    statsBonus: {
      statIncrease: [0, 2, 0, 0, 0, 0],
      desc: ["Your Dexterity score increases by 2."]
    },
    age: "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",
    alignment: "Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",
    size: "Small",
    size_description: "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",
    starting_proficiencies: [],
    languages: [
      {
        name: "Common",
      },
      {
        name: "Halfling",
      }
    ],
    language_desc: "You can speak, read, and write Common and Halfling. The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.",
    traits: [
      {
        name: "Brave"
      },
      {
        name: "Halfling Nimbleness"
      },
      {
        name: "Lucky"
      }
    ],
    subraces: [
      {
        name: "Lightfoot Halfling",
      }
    ],
  },
  {
    _id: "humanRace",
    index: 4,
    name: "Human",
    speed: 30,
    statsBonus: {
      statIncrease: [1, 1, 1, 1, 1, 1],
      desc: ["Your ability scores each increase by 1."]
    },
    age: "Humans reach adulthood in their late teens and live less than a century.",
    alignment: "Humans tend toward no particular alignment. The best and the worst are found among them.",
    size: "Medium",
    size_description: "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.",
    starting_proficiencies: [],
    languages: [
      {
        name: "Common",
      },
      {
        from: [
          {
            name: "Dwarvish",
          },
          {
            name: "Elvish",
          },
          {
            name: "Giant",
          },
          {
            name: "Gnomish",
          },
          {
            name: "Goblin",
          },
          {
            name: "Halfling",
          },
          {
            name: "Orc",
          },
          {
            name: "Abyssal",
          },
          {
            name: "Celestial",
          },
          {
            name: "Draconic",
          },
          {
            name: "Deep Speech",
          },
          {
            name: "Infernal",
          },
          {
            name: "Primordial",
          },
          {
            name: "Sylvan",
          },
          {
            name: "Undercommon",
          }
        ],
        type: "languages",
        choose: 1
      }
    ],
    language_desc: "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.",
    traits: [],
    subraces: [],
  },
  {
    _id: "dragonbornRace",
    index: 5,
    name: "Dragonborn",
    speed: 30,
    statsBonus: {
      statIncrease: [2, 0, 0, 0, 0, 1],
      desc: [
        "Your Strength score increases by 2, and your Charisma score increases by 1."
      ]
    },
    alignment: "",
    age: "",
    size: "",
    size_description: "",
    starting_proficiencies: [
      {},
      {
        from: [{}],
        type: "proficiencies",
        choose: 1
      }
    ],
    languages: [{}],
    language_desc: "",
    traits: [{}],
    subraces: [{}]
  },
  {
    _id: "gnomeRace",
    index: 6,
    name: "Gnome",
    speed: 25,
    statsBonus: {
      statIncrease: [0, 1, 0, 0, 0, 0],
      desc: ["Your Dexterity score increases by 1."]
    },
    alignment: "",
    age: "",
    size: "",
    size_description: "",
    starting_proficiencies: [
      {},
      {
        from: [{}],
        type: "proficiencies",
        choose: 1
      }
    ],
    languages: [{}],
    language_desc: "",
    traits: [{}],
    subraces: [{}]
  },
  {
    _id: "halfElfRace",
    index: 7,
    name: "Half-Elf",
    speed: 30,
    statsBonus: {
      statIncrease: [0, 0, 0, 0, 0, 2],
      desc: [
        "Your Charisma score increases by 2, and two other ability scores o f your choice increase by 1."
      ]
    },
    alignment: "",
    age: "",
    size: "",
    size_description: "",
    starting_proficiencies: [
      {},
      {
        from: [{}],
        type: "proficiencies",
        choose: 1
      }
    ],
    languages: [{}],
    language_desc: "",
    traits: [{}],
    subraces: [{}]
  },
  {
    _id: "halfOrcRace",
    index: 8,
    name: "Half-Orc",
    speed: 30,
    statsBonus: {
      statIncrease: [2, 0, 1, 0, 0, 0],
      desc: [
        "Your Strength score increases by 2, and your Constitution score increases by 1."
      ]
    },
    alignment: "",
    age: "",
    size: "",
    size_description: "",
    starting_proficiencies: [
      {},
      {
        from: [{}],
        type: "proficiencies",
        choose: 1
      }
    ],
    languages: [{}],
    language_desc: "",
    traits: [{}],
    subraces: [{}]
  },
  {
    _id: "tieflingRace",
    index: 9,
    name: "Tiefling",
    speed: 30,
    statsBonus: {
      statIncrease: [0, 0, 0, 1, 0, 2],
      desc: [
        "Your Intelligence score increases by 1, and your Charisma score increases by 2."
      ]
    },
    alignment: "",
    age: "",
    size: "",
    size_description: "",
    starting_proficiencies: [
      {},
      {
        from: [{}],
        type: "proficiencies",
        choose: 1
      }
    ],
    languages: [{}],
    language_desc: "",
    traits: [{}],
    subraces: [{}]
  }
];
