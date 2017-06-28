[
  {
    _id: "592d1ed5c9e7ce9f72157c6d",
    index: 8,
    name: "Ranger",
    hit_die: 10,
    proficiency_choices: [
      {
        from: [
          {
            name: "Skill: Animal Handling"
          },
          {
            name: "Skill: Athletics"
          },
          {
            name: "Skill: Insight"
          },
          {
            name: "Skill: Investigation"
          },
          {
            name: "Skill: Nature"
          },
          {
            name: "Skill: Perception"
          },
          {
            name: "Skill: Stealth"
          },
          {
            name: "Skill: Survival"
          }
        ],
        type: "proficiencies",
        choose: 3
      }
    ],
    proficiencies: [
      {
        name: "Light armor"
      },
      {
        name: "Medium armor"
      },
      {
        name: "Shields"
      },
      {
        name: "Simple weapons"
      },
      {
        name: "Martial weapons"
      }
    ],
    saving_throws: [
      {
        name: "STR"
      },
      {
        name: "DEX"
      }
    ],
    starting_equipment: {
      class: "Ranger"
    },
    class_levels: {
      class: "Ranger"
    },
    subclasses: [
      {
        name: "Hunter"
      }
    ],
    subclassSpecifics: [
      {
        name: "Fighting Style",
        choice: 1,
        level: 2,
        options: [
          {
            name: "Archery",
            "desc": [
              "You gain a +2 bonus to attack rolls you make with ranged weapons."
            ],
          },
          {
            name: "Defense",
            "desc": [
              "While you are wearing armor, you gain a +1 bonus to AC."
            ],
          },
          {
            name: "Dueling",
            "desc": [
              "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
            ],
          },
          {
            name: "Two-Weapon Fighting",
            "desc": [
              "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."
            ],
          }
        ]
      },
    ],
    spellcasting: {
      class: "Ranger"
    },

    featuresArray: [
      { _id: "rangerLevel1",
        level: 1,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Favored Enemy (1 type)",
            def: [
              "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.",
              "Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.",
              "You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.",
              "When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.",
              "You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
            ],
          },
          {
            name: "Natural Explorer (1 terrain type)",
            def: [
              "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.",
              "While traveling for an hour or more in your favored terrain, you gain the following benefits:",
              "• Difficult terrain doesn’t slow your group’s travel.",
              "• Your group can’t become lost except by magical means.",
              "• Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.",
              "• If you are traveling alone, you can move stealthily at a normal pace.",
              "• When you forage, you find twice as much food as you normally would.",
              "• While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.",
              "You choose additional favored terrain types at 6th and 10th level."
            ],
          }
        ],
        spellcasting: {
          spells_known: 0,
          spell_slots_level_1: 0,
          spell_slots_level_2: 0,
          spell_slots_level_3: 0,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0
        },
        class_specific: {
          favored_enemies: 1,
          favored_terrain: 1
        },
        index: 141,
        class: {
          name: "Ranger"
        }
      },
      { _id: "rangerLevel2",
        level: 2,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Spellcasting",
            def: [
              "By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does."
            ],
          },
          {
            name: "Fighting Style",
            def: [
              "You adopt a particular style of fighting as your specialty. Choose one of the fighting style options. You can’t take a Fighting Style option more than once, even if you later get to choose again."
            ]
          }
        ],
        spellcasting: {
          spells_known: 2,
          spell_slots_level_1: 2,
          spell_slots_level_2: 0,
          spell_slots_level_3: 0,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0
        },
        class_specific: {
          favored_enemies: 1,
          favored_terrain: 1
        },
        index: 142,
        class: {
          name: "Ranger"
        }
      },
      { _id: "rangerLevel3",
        level: 3,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Ranger Archetype",
            def: [
              "At 3rd level, you choose an archetype that you strive to emulate: Hunter or Beast Master, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level."
            ],
          },
          {
            name: "Primeval Awareness",
            def: [
              "Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn’t reveal the creatures’ location or number."
            ],
          }
        ],
        spellcasting: {
          spells_known: 3,
          spell_slots_level_1: 3,
          spell_slots_level_2: 0,
          spell_slots_level_3: 0,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0
        },
        class_specific: {
          favored_enemies: 1,
          favored_terrain: 1
        },
        index: 143,
        class: {
          name: "Ranger"
        }
      },
      { _id: "rangerLevel4",
        level: 4,
        ability_score_bonuses: 1,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 1",
            def: [
              "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
            ],
          }
        ],
        spellcasting: {
          spells_known: 3,
          spell_slots_level_1: 3,
          spell_slots_level_2: 0,
          spell_slots_level_3: 0,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0
        },
        class_specific: {
          favored_enemies: 1,
          favored_terrain: 1
        },
        index: 144,
        class: {
          name: "Ranger"
        }
      },
      { _id: "rangerLevel5",
        level: 5,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Extra Attack",
            def: [
              "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
            ],
          }
        ],
        spellcasting: {
          spells_known: 4,
          spell_slots_level_1: 4,
          spell_slots_level_2: 2,
          spell_slots_level_3: 0,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0
        },
        class_specific: {
          favored_enemies: 1,
          favored_terrain: 1
        },
        index: 145,
        class: {
          name: "Ranger"
        }
      },
      { _id: "rangerLevel6",
        level: 6,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Favored Enemy (2 types)",
            def: [
              "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.",
              "Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.",
              "You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.",
              "When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.",
              "You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
            ],
          },
          {
            name: "Natural Explorer (2 terrain types)",
            def: [
              "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.",
              "While traveling for an hour or more in your favored terrain, you gain the following benefits:",
              "• Difficult terrain doesn’t slow your group’s travel.",
              "• Your group can’t become lost except by magical means.",
              "• Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.",
              "• If you are traveling alone, you can move stealthily at a normal pace.",
              "• When you forage, you find twice as much food as you normally would.",
              "• While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.",
              "You choose additional favored terrain types at 6th and 10th level."
            ],
          }
        ],
        spellcasting: {
          spells_known: 4,
          spell_slots_level_1: 4,
          spell_slots_level_2: 2,
          spell_slots_level_3: 0,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0
        },
        class_specific: {
          favored_enemies: 2,
          favored_terrain: 2
        },
        index: 146,
        class: {
          name: "Ranger"
        }
      },
      { _id: "rangerLevel7",
        level: 7,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [],
        spellcasting: {
          spells_known: 5,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 0,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0
        },
        class_specific: {
          favored_enemies: 2,
          favored_terrain: 2
        },
        index: 147,
        class: {
          name: "Ranger"
        }
      },
      { _id: "rangerLevel8",
        level: 8,
        ability_score_bonuses: 2,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 2",
            def: [
              "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
            ],
          },
          {
            name: "Land’s Stride",
            def: [
              "Starting at 8th level, moving through non-magical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.",
              "In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell."
            ],
          }
        ],
        spellcasting: {
          spells_known: 5,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 0,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0
        },
        class_specific: {
          favored_enemies: 2,
          favored_terrain: 2
        },
        index: 148,
        class: {
          name: "Ranger"
        }
      },
      { _id: "rangerLevel9",
        level: 9,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [],
        spellcasting: {
          spells_known: 6,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 2,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0
        },
        class_specific: {
          favored_enemies: 2,
          favored_terrain: 2
        },
        index: 149,
        class: {
          name: "Ranger"
        }
      },
      { _id: "rangerLevel10",
        level: 10,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Natural Explorer (3 terrain types)",
            def: [
              "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.",
              "While traveling for an hour or more in your favored terrain, you gain the following benefits:",
              "• Difficult terrain doesn’t slow your group’s travel.",
              "• Your group can’t become lost except by magical means.",
              "• Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.",
              "• If you are traveling alone, you can move stealthily at a normal pace.",
              "• When you forage, you find twice as much food as you normally would.",
              "• While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.",
              "You choose additional favored terrain types at 6th and 10th level."
            ],
          },
          {
            name: "Hide in Plain Sight",
            def: [
              "Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.",
              "Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit."
            ],
          }
        ],
        spellcasting: {
          spells_known: 6,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 2,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0
        },
        class_specific: {
          favored_enemies: 2,
          favored_terrain: 3
        },
        index: 150,
        class: {
          name: "Ranger"
        }
      },
      { _id: "rangerLevel11",
        level: 11,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [],
        spellcasting: {
          spells_known: 7,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0
        },
        class_specific: {
          favored_enemies: 2,
          favored_terrain: 3
        },
        index: 151,
        class: {
          name: "Ranger"
        }
      },
      { _id: "rangerLevel12",
        level: 12,
        ability_score_bonuses: 3,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 4",
            def: [
              "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
            ],
          }
        ],
        spellcasting: {
          spells_known: 7,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0
        },
        class_specific: {
          favored_enemies: 2,
          favored_terrain: 3
        },
        index: 152,
        class: {
          name: "Ranger"
        }
      },
      { _id: "rangerLevel13",
        level: 13,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [],
        spellcasting: {
          spells_known: 8,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 1,
          spell_slots_level_5: 0
        },
        class_specific: {
          favored_enemies: 2,
          favored_terrain: 3
        },
        index: 153,
        class: {
          name: "Ranger"
        }
      },
      { _id: "rangerLevel14",
        level: 14,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Favored Enemy (3 enemies)",
            def: [
              "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.",
              "Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.",
              "You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.",
              "When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.",
              "You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
            ],
          },
          {
            name: "Vanish",
            def: [
              "Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can’t be tracked by nonmagical means, unless you choose to leave a trail."
            ],
          }
        ],
        spellcasting: {
          spells_known: 8,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 1,
          spell_slots_level_5: 0
        },
        class_specific: {
          favored_enemies: 3,
          favored_terran: 3
        },
        index: 154,
        class: {
          name: "Ranger"
        }
      },
      { _id: "rangerLevel15",
        level: 15,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [],
        spellcasting: {
          spells_known: 9,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 2,
          spell_slots_level_5: 0
        },
        class_specific: {
          favored_enemies: 3,
          favored_terran: 3
        },
        index: 155,
        class: {
          name: "Ranger"
        }
      },
      { _id: "rangerLevel16",
        level: 16,
        ability_score_bonuses: 4,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 4",
            def: [
              "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
            ],
          }
        ],
        spellcasting: {
          spells_known: 9,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 2,
          spell_slots_level_5: 0
        },
        class_specific: {
          favored_enemies: 3,
          favored_terran: 3
        },
        index: 156,
        class: {
          name: "Ranger"
        }
      },
      { _id: "rangerLevel17",
        level: 17,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        feature_choices: [],
        features: [],
        spellcasting: {
          spells_known: 10,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 3,
          spell_slots_level_5: 1
        },
        class_specific: {
          favored_enemies: 3,
          favored_terran: 3
        },
        index: 157,
        class: {
          name: "Ranger"
        }
      },
      { _id: "rangerLevel18",
        level: 18,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Feral Senses",
            def: [
              "At 18th level, you gain preternatural senses that help you fight creatures you can’t see. When you attack a creature you can’t see, your inability to see it doesn’t impose disadvantage on your attack rolls against it.",
              "You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn’t hidden from you and you aren’t blinded or deafened."
            ],
          }
        ],
        spellcasting: {
          spells_known: 10,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 3,
          spell_slots_level_5: 1
        },
        class_specific: {
          favored_enemies: 3,
          favored_terran: 3
        },
        index: 158,
        class: {
          name: "Ranger"
        }
      },
      { _id: "rangerLevel19",
        level: 19,
        ability_score_bonuses: 5,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 5",
            def: [
              "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
            ],
          }
        ],
        spellcasting: {
          spells_known: 11,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 3,
          spell_slots_level_5: 2
        },
        class_specific: {
          favored_enemies: 3,
          favored_terran: 3
        },
        index: 159,
        class: {
          name: "Ranger"
        }
      },
      { _id: "rangerLevel20",
        level: 20,
        ability_score_bonuses: 5,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Foe Slayer",
            def: [
              "At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied."
            ],
          }
        ],
        spellcasting: {
          spells_known: 11,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 3,
          spell_slots_level_5: 2
        },
        class_specific: {
          favored_enemies: 3,
          favored_terran: 3
        },
        index: 160,
        class: {
          name: "Ranger"
        }
      }
    ]
  }
];