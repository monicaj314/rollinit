[
  {
    _id: "592d1ed5c9e7ce9f72157c6e",
    index: 9,
    name: "Rogue",
    hit_die: 8,
    proficiency_choices: [
      {
        from: [
          {
            name: "Skill: Acrobatics"
          },
          {
            name: "Skill: Athletics"
          },
          {
            name: "Skill: Deception"
          },
          {
            name: "Skill: Insight"
          },
          {
            name: "Skill: Intimidation"
          },
          {
            name: "Skill: Investigation"
          },
          {
            name: "Skill: Perception"
          },
          {
            name: "Skill: Performance"
          },
          {
            name: "Skill: Persuasion"
          },
          {
            name: "Skill: Sleight of Hand"
          },
          {
            name: "Skill: Stealth"
          }
        ],
        type: "proficiencies",
        choose: 4
      }
    ],
    proficiencies: [
      {
        name: "Light armor"
      },
      {
        name: "Simple weapons"
      },
      {
        name: "Longswords"
      },
      {
        name: "Rapiers"
      },
      {
        name: "Shortswords"
      },
      {
        name: "Crossbows, hand"
      },
      {
        name: "Thieves' Tools"
      }
    ],
    saving_throws: [
      {
        name: "DEX"
      },
      {
        name: "INT"
      }
    ],
    starting_equipment: {
      class: "Rogue"
    },
    class_levels: {
      class: "Rogue"
    },
    subclasses: [
      {
        name: "Thief"
      }
    ],

    featuresArray: [
      { _id: "rogueLevel1",
        level: 1,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [
          {
            name: "Expertise 1"
          }
        ],
        features: [
          {
            name: "Sneak Attack",
            def: [
              "Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.",
              "You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.",
              "The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table."
            ],
          },
          {
            name: "Thieves' Cant",
            def: [
              "During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.",
              "In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run."
            ],
          }
        ],
        class_specific: {
          sneak_attack: {
            dice_count: 1,
            dice_value: 6
          }
        },
        index: 161,
        class: {
          name: "Rogue"
        }
      },
      { _id: "rogueLevel2",
        level: 2,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Cunning Action",
            def: [
              "Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action."
            ],
          }
        ],
        class_specific: {
          sneak_attack: {
            dice_count: 1,
            dice_value: 6
          }
        },
        index: 162,
        class: {
          name: "Rogue"
        }
      },
      { _id: "rogueLevel3",
        level: 3,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Roguish Archetype",
            def: [
              "At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities. The Thief archetype is detailed at the bottom of this page. Additional archetypes are available in the original source material. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level."
            ],
          }
        ],
        class_specific: {
          sneak_attack: {
            dice_count: 2,
            dice_value: 6
          }
        },
        index: 163,
        class: {
          name: "Rogue"
        }
      },
      { _id: "rogueLevel4",
        level: 4,
        ability_score_bonuses: 1,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 1",
            def: [
              "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
            ],
          }
        ],
        class_specific: {
          sneak_attack: {
            dice_count: 2,
            dice_value: 6
          }
        },
        index: 164,
        class: {
          name: "Rogue"
        }
      },
      { _id: "rogueLevel5",
        level: 5,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Uncanny Dodge",
            def: [
              "Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you."
            ],
          }
        ],
        class_specific: {
          sneak_attack: {
            dice_count: 3,
            dice_value: 6
          }
        },
        index: 165,
        class: {
          name: "Rogue"
        }
      },
      { _id: "rogueLevel6",
        level: 6,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [
          {
            name: "Expertise 2"
          }
        ],
        features: [],
        class_specific: {
          sneak_attack: {
            dice_count: 3,
            dice_value: 6
          }
        },
        index: 166,
        class: {
          name: "Rogue"
        }
      },
      { _id: "rogueLevel7",
        level: 7,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Evasion",
            def: [
              "Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon’s fiery breath or an ice storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
            ],
          }
        ],
        class_specific: {
          sneak_attack: {
            dice_count: 4,
            dice_value: 6
          }
        },
        index: 167,
        class: {
          name: "Rogue"
        }
      },
      { _id: "rogueLevel8",
        level: 8,
        ability_score_bonuses: 2,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 2",
            def: [
              "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
            ],
          }
        ],
        class_specific: {
          sneak_attack: {
            dice_count: 4,
            dice_value: 6
          }
        },
        index: 168,
        class: {
          name: "Rogue"
        }
      },
      { _id: "rogueLevel9",
        level: 9,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 2"
          }
        ],
        class_specific: {
          sneak_attack: {
            dice_count: 5,
            dice_value: 6
          }
        },
        index: 169,
        class: {
          name: "Rogue"
        }
      },
      { _id: "rogueLevel10",
        level: 10,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 3",
            def: [
              "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
            ],
          }
        ],
        class_specific: {
          sneak_attack: {
            dice_count: 5,
            dice_value: 6
          }
        },
        index: 170,
        class: {
          name: "Rogue"
        }
      },
      { _id: "rogueLevel11",
        level: 11,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Reliable Talent",
            def: [
              "By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10."
            ],
          }
        ],
        class_specific: {
          sneak_attack: {
            dice_count: 6,
            dice_value: 6
          }
        },
        index: 171,
        class: {
          name: "Rogue"
        }
      },
      { _id: "rogueLevel12",
        level: 12,
        ability_score_bonuses: 3,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 4",
            def: [
              "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
            ],
          }
        ],
        class_specific: {
          sneak_attack: {
            dice_count: 6,
            dice_value: 6
          }
        },
        index: 172,
        class: {
          name: "Rogue"
        }
      },
      { _id: "rogueLevel13",
        level: 13,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [],
        class_specific: {
          sneak_attack: {
            dice_count: 7,
            dice_value: 6
          }
        },
        index: 173,
        class: {
          name: "Rogue"
        }
      },
      { _id: "rogueLevel14",
        level: 14,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Blindsense",
            def: [
              "Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you."
            ],
          }
        ],
        class_specific: {
          sneak_attack: {
            dice_count: 7,
            dice_value: 6
          }
        },
        index: 174,
        class: {
          name: "Rogue"
        }
      },
      { _id: "rogueLevel15",
        level: 15,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Slippery Mind",
            def: [
              "By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws."
            ],
          }
        ],
        class_specific: {
          sneak_attack: {
            dice_count: 8,
            dice_value: 6
          }
        },
        index: 175,
        class: {
          name: "Rogue"
        }
      },
      { _id: "rogueLevel16",
        level: 16,
        ability_score_bonuses: 4,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 5",
            def: [
              "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
            ],
          }
        ],
        class_specific: {
          sneak_attack: {
            dice_count: 8,
            dice_value: 6
          }
        },
        index: 176,
        class: {
          name: "Rogue"
        }
      },
      { _id: "rogueLevel17",
        level: 17,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        feature_choices: [],
        features: [],
        class_specific: {
          sneak_attack: {
            dice_count: 9,
            dice_value: 6
          }
        },
        index: 177,
        class: {
          name: "Rogue"
        }
      },
      { _id: "rogueLevel18",
        level: 18,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Elusive",
            def: [
              "Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren’t incapacitated."
            ],
          }
        ],
        class_specific: {
          sneak_attack: {
            dice_count: 9,
            dice_value: 6
          }
        },
        index: 178,
        class: {
          name: "Rogue"
        }
      },
      { _id: "rogueLevel19",
        level: 19,
        ability_score_bonuses: 5,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 6",
            def: [
              "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
            ],
          }
        ],
        class_specific: {
          sneak_attack: {
            dice_count: 10,
            dice_value: 6
          }
        },
        index: 179,
        class: {
          name: "Rogue"
        }
      },
      { _id: "rogueLevel20",
        level: 20,
        ability_score_bonuses: 5,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Stroke of Luck",
            def: [
              "At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.",
              "Once you use this feature, you can't use it again until you finish a short or long rest."
            ],
          }
        ],
        class_specific: {
          sneak_attack: {
            dice_count: 10,
            dice_value: 6
          }
        },
        index: 180,
        class: {
          name: "Rogue"
        }
      }
    ]
  }
];
