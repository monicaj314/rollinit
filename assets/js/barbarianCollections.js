[
  {
    _id: "barbarianClass",
    name: "Barbarian",
    hitDie: 12,
    skillChoices: [
      {
        from: [
          {
            name: "Skill: Animal Handling"
          },
          {
            name: "Skill: Athletics"
          },
          {
            name: "Skill: Intimidation"
          },
          {
            name: "Skill: Nature"
          },
          {
            name: "Skill: Perception"
          },
          {
            name: "Skill: Survival"
          }
        ],
        type: "skill",
        choose: 2
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
        name: "CON"
      }
    ],
    starting_equipment: {
      class: "Barbarian"
    },
    class_levels: {
      class: "Barbarian"
    },
    subclasses: [
      {
        name: "Berserker",
      }
    ],

    featuresArray: [
      {
        _id: "barbarianLevel1",
        level: 1,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Rage",
            desc: [
              "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren't wearing heavy armor:",
              "• You have advantage on Strength checks and Strength saving throws.",
              "• When you make a melee weapon Attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.",
              "• You have Resistance to bludgeoning, piercing, and slashing damage.",
              "If you are able to cast Spells, you can't cast them or concentrate on them while raging.",
              "Your rage lasts for 1 minute. It ends early if you are knocked Unconscious or if Your Turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on Your Turn as a Bonus Action.",
              "Once you have raged the maximum number of times for your barbarian level, you must finish a Long Rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th."
            ]
          },
          {
            name: "Unarmored Defense",
            desc: [
              "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit."
            ]
          }
        ],
        class_specific: {
          rage_count: 2,
          rage_damage_bonus: 2,
          brutal_critical_dice: 0
        },
        index: 1,
        class: {
          name: "Barbarian",
        },
      },
      {
        _id: "barbarianLevel2",
        level: 2,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Reckless Attack",
            desc: [
              "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn."
            ]
          },
          {
            name: "Danger Sense",
            desc: [
              "At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated."
            ]
          }
        ],
        class_specific: {
          rage_count: 2,
          rage_damage_bonus: 2,
          brutal_critical_dice: 0
        },
        index: 2,
        class: {
          name: "Barbarian",
        },
      },
      {
        _id: "barbarianLevel3",
        level: 3,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Primal Path",
            desc: [
              "At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels."
            ]
          },
          {
            name: "Frenzy",
            desc: [
              "Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion (as described in appendix A)."
            ]
          }
        ],
        class_specific: {
          rage_count: 3,
          rage_damage_bonus: 2,
          brutal_critical_dice: 0
        },
        index: 3,
        class: {
          name: "Barbarian",
        },
        subclass: {
          name: "Berserker",
          subclass_flavor: "Primal Path",
          desc: [
            "For some barbarians, rage is a means to an end— that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker’s rage, you thrill in the chaos of battle, heedless of your own health or well-being."
          ]
        },
        subclass: {
          name: "Totem Warrior",
          subclass_flavor: "Primal Path",
          desc: [
            "For some barbarians, rage is a means to an end— that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker’s rage, you thrill in the chaos of battle, heedless of your own health or well-being."
          ]
        },
      },
      {
        _id: "barbarianLevel4",
        level: 4,
        ability_score_bonuses: 1,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 1",
            desc: [
              "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
            ]
          }
        ],
        class_specific: {
          rage_count: 3,
          rage_damage_bonus: 2,
          brutal_critical_dice: 0
        },
        index: 4,
        class: {
          name: "Barbarian",
        },
      },
      {
        _id: "barbarianLevel5",
        level: 5,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Extra Attack",
            desc: [
              "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
            ]
          },
          {
            name: "Fast Movement",
            desc: [
              "Starting at 5th level, your speed increases by 10 feet while you are not wearing heavy armor."
            ]
          }
        ],
        class_specific: {
          rage_count: 3,
          rage_damage_bonus: 2,
          brutal_critical_dice: 0
        },
        index: 5,
        class: {
          name: "Barbarian",
        },
      },
      {
        _id: "barbarianLevel6",
        level: 6,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Mindless Rage",
            desc: [
              "Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage."
            ]
          }
        ],
        class_specific: {
          rage_count: 4,
          rage_damage_bonus: 2,
          brutal_critical_dice: 0
        },
        index: 6,
        class: {
          name: "Barbarian",
        },
      },
      {
        _id: "barbarianLevel7",
        level: 7,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Feral Instinct",
            desc: [
              "By 7th level, your instincts are so honed that you have advantage on initiative rolls.",
              "Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn."
            ]
          }
        ],
        class_specific: {
          rage_count: 4,
          rage_damage_bonus: 2,
          brutal_critical_dice: 0
        },
        index: 7,
        class: {
          name: "Barbarian",
        },
      },
      {
        _id: "barbarianLevel8",
        level: 8,
        ability_score_bonuses: 2,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 2",
            desc: [
              "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
            ]
          }
        ],
        class_specific: {
          rage_count: 4,
          rage_damage_bonus: 2,
          brutal_critical_dice: 0
        },
        index: 8,
        class: {
          name: "Barbarian",
        },
      },
      {
        _id: "barbarianLevel9",
        level: 9,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Brutal Critical",
            desc: [
              "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level."
            ]
          }
        ],
        class_specific: {
          rage_count: 4,
          rage_damage_bonus: 3,
          brutal_critical_dice: 1
        },
        index: 9,
        class: {
          name: "Barbarian",
        },
      },
      {
        _id: "barbarianLevel10",
        level: 10,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Intimidating Presence",
            desc: [
              "Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.",
              " If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours."
            ]
          }
        ],
        class_specific: {
          rage_count: 4,
          rage_damage_bonus: 3,
          brutal_critical_dice: 1
        },
        index: 10,
        class: {
          name: "Barbarian",
        },
      },
      {
        _id: "barbarianLevel11",
        level: 11,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Relentless Rage",
            desc: [
              "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.",
              "Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10."
            ]
          }
        ],
        class_specific: {
          rage_count: 4,
          rage_damage_bonus: 3,
          brutal_critical_dice: 1
        },
        index: 11,
        class: {
          name: "Barbarian",
        },
      },
      {
        _id: "barbarianLevel12",
        level: 12,
        ability_score_bonuses: 3,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 3",
            desc: [
              "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
            ]
          }
        ],
        class_specific: {
          rage_count: 5,
          rage_damage_bonus: 3,
          brutal_critical_dice: 1
        },
        index: 12,
        class: {
          name: "Barbarian",
        },
      },
      {
        _id: "barbarianLevel13",
        level: 13,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Brutal Critical (2 dice)",
            desc: [
              "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level."
            ]
          }
        ],
        class_specific: {
          rage_count: 5,
          rage_damage_bonus: 3,
          brutal_critical_dice: 2
        },
        index: 13,
        class: {
          name: "Barbarian",
        },
      },
      {
        _id: "barbarianLevel14",
        level: 14,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Retaliation",
            desc: [
              "Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon Attack against that creature."
            ]
          }
        ],
        class_specific: {
          rage_count: 5,
          rage_damage_bonus: 3,
          brutal_critical_dice: 2
        },
        index: 14,
        class: {
          name: "Barbarian",
        },
      },
      {
        _id: "barbarianLevel15",
        level: 15,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Persistent Rage",
            desc: [
              "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it."
            ]
          }
        ],
        class_specific: {
          rage_count: 5,
          rage_damage_bonus: 3,
          brutal_critical_dice: 2
        },
        index: 15,
        class: {
          name: "Barbarian",
        },
      },
      {
        _id: "barbarianLevel16",
        level: 16,
        ability_score_bonuses: 4,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 4",
            desc: [
              "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
            ]
          }
        ],
        class_specific: {
          rage_count: 5,
          rage_damage_bonus: 4,
          brutal_critical_dice: 2
        },
        index: 16,
        class: {
          name: "Barbarian",
        },
      },
      {
        _id: "barbarianLevel17",
        level: 17,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Brutal Critical (3 dice)",
            desc: [
              "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level."
            ]
          }
        ],
        class_specific: {
          rage_count: 6,
          rage_damage_bonus: 4,
          brutal_critical_dice: 3
        },
        index: 17,
        class: {
          name: "Barbarian",
        },
      },
      {
        _id: "barbarianLevel18",
        level: 18,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Indomitable Might",
            desc: [
              "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total."
            ]
          }
        ],
        class_specific: {
          rage_count: 6,
          rage_damage_bonus: 4,
          brutal_critical_dice: 3
        },
        index: 18,
        class: {
          name: "Barbarian",
        },
      },
      {
        _id: "barbarianLevel19",
        level: 19,
        ability_score_bonuses: 5,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 5",
            desc: [
              "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
            ]
          }
        ],
        class_specific: {
          rage_count: 6,
          rage_damage_bonus: 4,
          brutal_critical_dice: 3
        },
        index: 19,
        class: {
          name: "Barbarian",
        },
      },
      {
        _id: "barbarianLevel20",
        level: 20,
        ability_score_bonuses: 5,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Fast Movement",
            desc: [
              "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24."
            ]
          }
        ],
        class_specific: {
          rage_count: 9999,
          rage_damage_bonus: 4,
          brutal_critical_dice: 3
        },
        index: 20,
        class: {
          name: "Barbarian",
        },
      }
    ]
  }
];
