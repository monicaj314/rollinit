[
  {
    _id: "592d1ed5c9e7ce9f72157c69",
    index: 5,
    name: "Fighter",
    hit_die: 10,
    proficiency_choices: [
      {
        from: [
          {
            name: "Skill: Acrobatics"
          },
          {
            name: "Skill: Animal Handling"
          },
          {
            name: "Skill: Athletics"
          },
          {
            name: "Skill: History"
          },
          {
            name: "Skill: Insight"
          },
          {
            name: "Skill: Intimidation"
          },
          {
            name: "Skill: Perception"
          },
          {
            name: "Skill: Survival"
          }
        ],
        type: "proficiencies",
        choose: 2
      }
    ],
    proficiencies: [
      {
        name: "All armor"
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
      class: "Fighter"
    },
    class_levels: {
      class: "Fighter"
    },
    subclasses: [
      {
        name: "Champion"
      }
    ],
    subclassSpecifics: [
      {
        name: "Fighting Style",
        choice: 1,
        level: 1,
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
            name: "Great Weapon Fighting",
            "desc": [
              "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit."
            ],
          },
          {
            name: "Protection",
            "desc": [
              "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield."
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

      {
        name: "Martial Archetype",
        def: [
          "At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. Choose Champion, Battle Master, or Eldritch Knight. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level."
        ],
        level: 3,
        options: [
          {
            name:"Champion",
            def: [
              "The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows."
            ],
            benefits:[
              {
                name:"Improved Critical",
                def:[
                  "Beginning when you choose this archetype at 3rd level, your weapon attacks sco re a critical hit on a roll of 19 or 20."
                ]
              },
              {
                name:"Remarkable Athlete",
                def:[
                  "Starting at 7th level, you can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn’t already use your proficiency bonus.",
                  "In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier."
                ]
              },
              {
                name:"Additional Fighting Style",
                def:[
                  "At 10th level, you can choose a second option from the Fighting Style class feature."
                ]
              },
              {
                name: "Superior Critical",
                def: [
                  "Starting at 15th level, your weapon attacks score a critical hit on a roll of 18-20."
                ]
              },
              {
                name:"Survivor",
                def:[
                  "At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don’t gain this benefit if you have 0 hit points."
                ]
              }
            ]
          },
          {
            name: "Battle Master",
            def:[
                  "Those who emulate the archetypal Battle Master employ martial techniques passed down through generations. To a Battle Master, combat is an academic field, sometimes including subjects beyond battle such as weaponsmithing and calligraphy. Not every fighter absorbs the lessons of history, theory, and artistry that are reflected in the Battle Master archetype, but those who do are well-rounded fighters of great skill and knowledge."
                ],
            benefits:[
              {
                name:"",
                def:[
                  ""]
              }
            ]
          },
          {
            name:"Eldritch Knight",
            def: [
              "The archetypal Eldritch Knight combines the martial mastery common to all fighters with a careful study of magic. Eldritch Knights use magical techniques similar to those practiced by wizards. They focus their study on two of the eight schools of magic: abjuration and evocation. Abjuration spells grant an Eldritch Knight additional protection in battle, and evocation spells deal damage to many foes at once, extending the fighter’s reach in combat. These knights learn a comparatively small number of spells, committing them to memory instead of keeping them in a spellbook."
            ],
            benefits:[
              {
                name:"",
                def:[
                  ""
                  ]
              }
            ]
          }
        ]
      }
    ],

    featuresArray: [
      { _id: "fighterLevel1",
        level: 1,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Second Wind",
            def: [
              "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again."
            ],
          },
          {
            name: "Fighting Style",
            def: [
              "You adopt a particular style of fighting as your specialty. Choose one of the fighting style options. You can’t take a Fighting Style option more than once, even if you later get to choose again."
            ]
          }
        ],
        class_specific: {
          action_surges: 0,
          indomitable_uses: 0,
          extra_attacks: 0
        },
        index: 81,
        class: {
          name: "Fighter"
        }
      },
      { _id: "fighterLevel2",
        level: 2,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Action Surge (1 use)",
            def: [
              "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.",
              "Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
            ],
          },
          {
            name: "Action Surge (2 uses)",
            def: [
              "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.",
              "Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
            ],
          }
        ],
        class_specific: {
          action_surges: 1,
          indomitable_uses: 0,
          extra_attacks: 0
        },
        index: 82,
        class: {
          name: "Fighter"
        }
      },
      { _id: "fighterLevel3",
        level: 3,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Martial Archetype",
            def: [
              "At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. Choose Champion, Battle Master, or Eldritch Knight, all detailed at the end of the class description. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level."
            ],
          }
        ],
        class_specific: {
          action_surges: 1,
          indomitable_uses: 0,
          extra_attacks: 0
        },
        index: 83,
        class: {
          name: "Fighter"
        }
      },
      { _id: "fighterLevel4",
        level: 4,
        ability_score_bonuses: 1,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 1",
            def: [
              "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
            ],
          }
        ],
        class_specific: {
          action_surges: 1,
          indomitable_uses: 0,
          extra_attacks: 0
        },
        index: 84,
        class: {
          name: "Fighter"
        }
      },
      { _id: "fighterLevel5",
        level: 5,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Extra Attack (1)",
            def: [
              "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class."
            ],
          }
        ],
        class_specific: {
          action_surges: 1,
          indomitable_uses: 0,
          extra_attacks: 1
        },
        index: 85,
        class: {
          name: "Fighter"
        }
      },
      { _id: "fighterLevel6",
        level: 6,
        ability_score_bonuses: 2,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 2",
            def: [
              "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
            ],
          }
        ],
        class_specific: {
          action_surges: 1,
          indomitable_uses: 0,
          extra_attacks: 1
        },
        index: 86,
        class: {
          name: "Fighter"
        }
      },
      { _id: "fighterLevel7",
        level: 7,
        ability_score_bonuses: 2,
        prof_bonus: 3,
        feature_choices: [],
        features: [],
        class_specific: {
          action_surges: 1,
          indomitable_uses: 0,
          extra_attacks: 1
        },
        index: 87,
        class: {
          name: "Fighter"
        }
      },
      { _id: "fighterLevel8",
        level: 8,
        ability_score_bonuses: 3,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 3",
            def: [
              "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
            ],
          }
        ],
        class_specific: {
          action_surges: 1,
          indomitable_uses: 0,
          extra_attacks: 1
        },
        index: 88,
        class: {
          name: "Fighter"
        }
      },
      { _id: "fighterLevel9",
        level: 9,
        ability_score_bonuses: 3,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Indomitable (1 use)",
            def: [
              "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
            ],
          }
        ],
        class_specific: {
          action_surges: 1,
          indomitable_uses: 1,
          extra_attacks: 1
        },
        index: 89,
        class: {
          name: "Fighter"
        }
      },
      { _id: "fighterLevel10",
        level: 10,
        ability_score_bonuses: 3,
        prof_bonus: 4,
        feature_choices: [],
        features: [],
        class_specific: {
          action_surges: 1,
          indomitable_uses: 1,
          extra_attacks: 1
        },
        index: 90,
        class: {
          name: "Fighter"
        }
      },
      { _id: "fighterLevel11",
        level: 11,
        ability_score_bonuses: 3,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Extra Attack (2)",
            def: [
              "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class."
            ],
          }
        ],
        class_specific: {
          action_surges: 1,
          indomitable_uses: 1,
          extra_attacks: 2
        },
        index: 91,
        class: {
          name: "Fighter"
        }
      },
      { _id: "fighterLevel12",
        level: 12,
        ability_score_bonuses: 4,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 4",
            def: [
              "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
            ],
          }
        ],
        class_specific: {
          action_surges: 1,
          indomitable_uses: 1,
          extra_attacks: 2
        },
        index: 92,
        class: {
          name: "Fighter"
        }
      },
      { _id: "fighterLevel13",
        level: 13,
        ability_score_bonuses: 4,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Indomitable (2 uses)",
            def: [
              "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
            ],
          }
        ],
        class_specific: {
          action_surges: 1,
          indomitable_uses: 2,
          extra_attacks: 2
        },
        index: 93,
        class: {
          name: "Fighter"
        }
      },
      { _id: "fighterLevel14",
        level: 14,
        ability_score_bonuses: 5,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 5",
            def: [
              "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
            ],
          }
        ],
        class_specific: {
          action_surges: 1,
          indomitable_uses: 2,
          extra_attacks: 2
        },
        index: 94,
        class: {
          name: "Fighter"
        }
      },
      { _id: "fighterLevel15",
        level: 15,
        ability_score_bonuses: 5,
        prof_bonus: 5,
        feature_choices: [],
        features: [],
        class_specific: {
          action_surges: 1,
          indomitable_uses: 2,
          extra_attacks: 2
        },
        index: 95,
        class: {
          name: "Fighter"
        }
      },
      { _id: "fighterLevel16",
        level: 16,
        ability_score_bonuses: 6,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 6",
            def: [
              "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
            ],
          }
        ],
        class_specific: {
          action_surges: 1,
          indomitable_uses: 2,
          extra_attacks: 2
        },
        index: 96,
        class: {
          name: "Fighter"
        }
      },
      { _id: "fighterLevel17",
        level: 17,
        ability_score_bonuses: 6,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Indomitable (3 uses)",
            def: [
              "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
            ],
          }
        ],
        class_specific: {
          action_surges: 2,
          indomitable_uses: 3,
          extra_attacks: 2
        },
        index: 97,
        class: {
          name: "Fighter"
        }
      },
      { _id: "fighterLevel18",
        level: 18,
        ability_score_bonuses: 6,
        prof_bonus: 6,
        feature_choices: [],
        features: [],
        class_specific: {
          action_surges: 2,
          indomitable_uses: 3,
          extra_attacks: 2
        },
        index: 98,
        class: {
          name: "Fighter"
        }
      },
      { _id: "fighterLevel19",
        level: 19,
        ability_score_bonuses: 7,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 7",
            def: [
              "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
            ],
          }
        ],
        class_specific: {
          action_surges: 2,
          indomitable_uses: 3,
          extra_attacks: 2
        },
        index: 99,
        class: {
          name: "Fighter"
        }
      },
      { _id: "fighterLevel20",
        level: 20,
        ability_score_bonuses: 7,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Extra Attack (3)",
            def: [
              "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class."
            ],
          }
        ],
        class_specific: {
          action_surges: 2,
          indomitable_uses: 3,
          extra_attacks: 3
        },
        index: 100,
        class: {
          name: "Fighter"
        }
      }
    ]
  }
];
