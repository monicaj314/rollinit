[
  {
    _id: "592d1ed5c9e7ce9f72157c6f",
    index: 6,
    name: "Monk",
    hit_die: 8,
    proficiency_choices: [
      {
        from: [
          {
            from: [
              {
                name: "Alchemist's supplies"
              },
              {
                name: "Brewer's supplies"
              },
              {
                name: "Calligrapher's supplies"
              },
              {
                name: "Carpenter's tools"
              },
              {
                name: "Cartographer's tools"
              },
              {
                name: "Cobbler's tools"
              },
              {
                name: "Cook's utensils"
              },
              {
                name: "Glassblower's tools"
              },
              {
                name: "Jeweler's tools"
              },
              {
                name: "Leatherworker's tools"
              },
              {
                name: "Mason's tools"
              },
              {
                name: "Painter's supplies"
              },
              {
                name: "Potter's tools"
              },
              {
                name: "Smith's tools"
              },
              {
                name: "Tinker's tools"
              },
              {
                name: "Weaver's tools"
              },
              {
                name: "Woodcarver's tools"
              },
              {
                name: "Disguise kit"
              },
              {
                name: "Forgery kit"
              }
            ],
            type: "proficiencies",
            choose: 1
          },
          {
            from: [
              {
                name: "Bagpipes"
              },
              {
                name: "Drum"
              },
              {
                name: "Dulcimer"
              },
              {
                name: "Flute"
              },
              {
                name: "Lute"
              },
              {
                name: "Lyre"
              },
              {
                name: "Horn"
              },
              {
                name: "Pan flute"
              },
              {
                name: "Shawm"
              },
              {
                name: "Viol"
              }
            ],
            type: "proficiencies",
            choose: 1
          }
        ],
        type: "choice",
        choose: 1
      },
      {
        from: [
          {
            name: "Acrobatics"
          },
          {
            name: "Athletics"
          },
          {
            name: "History"
          },
          {
            name: "Insight"
          },
          {
            name: "Religion"
          },
          {
            name: "Stealth"
          }
        ],
        type: "proficiencies",
        choose: 2
      }
    ],
    proficiencies: [
      {
        name: "Simple weapons"
      },
      {
        name: "Shortswords"
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
      class: "Monk"
    },
    class_levels: {
      class: "Monk"
    },
    subclasses: [
      {
        name: "Open Hand"
      }
    ],

    featuresArray: [
      { _id: "monkLevel1",
        level: 1,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Unarmored Defense",
            def: [
              "Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier."
            ],
          },
          {
            name: "Martial Arts",
            def: [
              "At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two- handed or heavy property.",
              "You gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield:",
              "• You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.",
              "• You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of Table: The Monk.",
              "• When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven’t already taken a bonus action this turn.",
              "Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon."
            ],
          }
        ],
        class_specific: {
          martial_arts: {
            dice_count: 1,
            dice_value: 4
          },
          ki_points: 0,
          unarmored_movement: 10
        },
        index: 101,
        class: {
          name: "Monk"
        }
      },
      { _id: "monkLevel2",
        level: 2,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Ki",
            def: [
              "Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of Table: The Monk.",
              "You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.",
              "When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.",
              "Some of your ki features require your target to make a saving throw to resist the feature’s effects. The saving throw DC is calculated as follows:",
              "Ki save DC = 8 + your proficiency bonus + your Wisdom modifier"
            ],
          },
          {
            name: "Flurry of Blows",
            def: [
              "Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action."
            ],
          },
          {
            name: "Patient Defense",
            def: [
              "You can spend 1 ki point to take the Dodge action as a bonus action on your turn."
            ],
          },
          {
            name: "Step of the Wind",
            def: [
              "You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn."
            ],
          },
          {
            name: "Unarmored Movement 1",
            def: [
              "Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in Table: The Monk.",
              "At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move."
            ],
          }
        ],
        class_specific: {
          martial_arts: {
            dice_count: 1,
            dice_value: 4
          },
          ki_points: 2,
          unarmored_movement: 10
        },
        index: 102,
        class: {
          name: "Monk"
        }
      },
      { _id: "monkLevel3",
        level: 3,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Monastic Tradition",
            def: [
              "When you reach 3rd level, you commit yourself to a monastic tradition: the Way of the Open Hand, the Way of Shadow, or the Way of the Four Elements, all detailed at the end of the class description. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level."
            ],
          },
          {
            name: "Deflect Missiles",
            def: [
              "Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.",
              "If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack, which has a normal range of 20 feet and a long range of 60 feet."
            ],
          }
        ],
        class_specific: {
          martial_arts: {
            dice_count: 1,
            dice_value: 4
          },
          ki_points: 3,
          unarmored_movement: 10
        },
        index: 103,
        class: {
          name: "Monk"
        }
      },
      { _id: "monkLevel4",
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
          },
          {
            name: "Slow Fall",
            def: [
              "Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level."
            ],
          }
        ],
        class_specific: {
          martial_arts: {
            dice_count: 1,
            dice_value: 4
          },
          ki_points: 4,
          unarmored_movement: 10
        },
        index: 104,
        class: {
          name: "Monk"
        }
      },
      { _id: "monkLevel5",
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
          },
          {
            name: "Stunning Strike",
            def: [
              "Starting at 5th level, you can interfere with the flow of ki in an opponent’s body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn."
            ],
          }
        ],
        class_specific: {
          martial_arts: {
            dice_count: 1,
            dice_value: 6
          },
          ki_points: 5,
          unarmored_movement: 15
        },
        index: 105,
        class: {
          name: "Monk"
        }
      },
      { _id: "monkLevel6",
        level: 6,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Ki Empowered Strikes",
            def: [
              "Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
            ],
          }
        ],
        class_specific: {
          martial_arts: {
            dice_count: 1,
            dice_value: 6
          },
          ki_points: 6,
          unarmored_movement: 15
        },
        index: 106,
        class: {
          name: "Monk"
        }
      },
      { _id: "monkLevel7",
        level: 7,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Evasion",
            def: [
              "At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon’s lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
            ],
          },
          {
            name: "Stillness of Mind",
            def: [
              "Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened."
            ],
          }
        ],
        class_specific: {
          martial_arts: {
            dice_count: 1,
            dice_value: 6
          },
          ki_points: 7,
          unarmored_movement: 15
        },
        index: 107,
        class: {
          name: "Monk"
        }
      },
      { _id: "monkLevel8",
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
          }
        ],
        class_specific: {
          martial_arts: {
            dice_count: 1,
            dice_value: 6
          },
          ki_points: 8,
          unarmored_movement: 15
        },
        index: 108,
        class: {
          name: "Monk"
        }
      },
      { _id: "monkLevel9",
        level: 9,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Unarmored Movement 2",
            def: [
              "Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in Table: The Monk.",
              "At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move."
            ],
          }
        ],
        class_specific: {
          martial_arts: {
            dice_count: 1,
            dice_value: 6
          },
          ki_points: 9,
          unarmored_movement: 15
        },
        index: 109,
        class: {
          name: "Monk"
        }
      },
      { _id: "monkLevel10",
        level: 10,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Purity of Body",
            def: [
              "At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison."
            ],
          }
        ],
        class_specific: {
          martial_arts: {
            dice_count: 1,
            dice_value: 6
          },
          ki_points: 10,
          unarmored_movement: 20
        },
        index: 110,
        class: {
          name: "Monk"
        }
      },
      { _id: "monkLevel11",
        level: 11,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [],
        class_specific: {
          martial_arts: {
            dice_count: 1,
            dice_value: 8
          },
          ki_points: 11,
          unarmored_movement: 20
        },
        index: 111,
        class: {
          name: "Monk"
        }
      },
      { _id: "monkLevel12",
        level: 12,
        ability_score_bonuses: 3,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 3",
            def: [
              "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
            ],
          }
        ],
        class_specific: {
          martial_arts: {
            dice_count: 1,
            dice_value: 8
          },
          ki_points: 12,
          unarmored_movement: 20
        },
        index: 112,
        class: {
          name: "Monk"
        }
      },
      { _id: "monkLevel13",
        level: 13,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Tongue of the Sun and Moon",
            def: [
              "Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say."
            ],
          }
        ],
        class_specific: {
          martial_arts: {
            dice_count: 1,
            dice_value: 8
          },
          ki_points: 13,
          unarmored_movement: 20
        },
        index: 113,
        class: {
          name: "Monk"
        }
      },
      { _id: "monkLevel14",
        level: 14,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Diamond Soul",
            def: [
              "Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.",
              "Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result."
            ],
          }
        ],
        class_specific: {
          martial_arts: {
            dice_count: 1,
            dice_value: 8
          },
          ki_points: 14,
          unarmored_movement: 25
        },
        index: 114,
        class: {
          name: "Monk"
        }
      },
      { _id: "monkLevel15",
        level: 15,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Timeless Body",
            def: [
              "At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can’t be aged magically. You can still die of old age, however. In addition, you no longer need food or water."
            ],
          }
        ],
        class_specific: {
          martial_arts: {
            dice_count: 1,
            dice_value: 8
          },
          ki_points: 15,
          unarmored_movement: 25
        },
        index: 115,
        class: {
          name: "Monk"
        }
      },
      { _id: "monkLevel16",
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
        class_specific: {
          martial_arts: {
            dice_count: 1,
            dice_value: 8
          },
          ki_points: 16,
          unarmored_movement: 25
        },
        index: 116,
        class: {
          name: "Monk"
        }
      },
      { _id: "monkLevel17",
        level: 17,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        feature_choices: [],
        features: [],
        class_specific: {
          martial_arts: {
            dice_count: 1,
            dice_value: 10
          },
          ki_points: 17,
          unarmored_movement: 25
        },
        index: 117,
        class: {
          name: "Monk"
        }
      },
      { _id: "monkLevel18",
        level: 18,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Empty Body",
            def: [
              "Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.",
              "Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can’t take any other creatures with you."
            ],
          }
        ],
        class_specific: {
          martial_arts: {
            dice_count: 1,
            dice_value: 10
          },
          ki_points: 18,
          unarmored_movement: 30
        },
        index: 118,
        class: {
          name: "Monk"
        }
      },
      { _id: "monkLevel19",
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
        class_specific: {
          martial_arts: {
            dice_count: 1,
            dice_value: 10
          },
          ki_points: 19,
          unarmored_movement: 30
        },
        index: 119,
        class: {
          name: "Monk"
        }
      },
      { _id: "monkLevel20",
        level: 20,
        ability_score_bonuses: 5,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Perfect Self",
            def: [
              "At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points."
            ],
          }
        ],
        class_specific: {
          martial_arts: {
            dice_count: 1,
            dice_value: 10
          },
          ki_points: 20,
          unarmored_movement: 30
        },
        index: 120,
        class: {
          name: "Monk"
        }
      }
    ]
  }
];
