[
  {
    _id: "592d1ed5c9e7ce9f72157c6c",
    index: 7,
    name: "Paladin",
    hit_die: 10,
    proficiency_choices: [
      {
        from: [
          {
            name: "Skill: Athletics"
          },
          {
            name: "Skill: Insight"
          },
          {
            name: "Skill: Intimidation"
          },
          {
            name: "Skill: Medicine"
          },
          {
            name: "Skill: Persuasion"
          },
          {
            name: "Skill: Religion"
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
        name: "WIS"
      },
      {
        name: "CHA"
      }
    ],
    starting_equipment: {
      class: "Paladin"
    },
    class_levels: {
      class: "Paladin"
    },
    subclasses: [
      {
        name: "Devotion"
      }
    ],
    spellcasting: {
      class: "Paladin"
    },
    subclassSpecifics: [
      {
        name: "Fighting Style",
        choice: 1,
        level: 2,
        options: [
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
          }
        ]
      },
    ],
    featuresArray: [
      { _id: "paladinLevel1",
        level: 1,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Divine Sense",
            def: [
              "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.",
              "You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses."
            ],
          },
          {
            name: "Lay on Hands",
            def: [
              "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5.",
              "As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.",
              "Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.",
            ]
          }
        ],
        spellcasting: {
          spell_slots_level_1: 0,
          spell_slots_level_2: 0,
          spell_slots_level_3: 0,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0
        },
        class_specific: {
          aura_range: 0
        },
        index: 121,
        class: {
          name: "Paladin"
        }
      },
      { _id: "paladinLevel2",
        level: 2,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Spellcasting",
            def: [
              "By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does."
            ],
          },
          {
            name: "Fighting Style",
            def: [
              "You adopt a particular style of fighting as your specialty. Choose one of the fighting style options. You can’t take a Fighting Style option more than once, even if you later get to choose again."
            ]
          },
          {
            name: "Divine Smite",
            def: [
              "Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon’s damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend."
            ],
          }
        ],
        spellcasting: {
          spell_slots_level_1: 2,
          spell_slots_level_2: 0,
          spell_slots_level_3: 0,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0
        },
        class_specific: {
          aura_range: 0
        },
        index: 122,
        class: {
          name: "Paladin"
        }
      },
      { _id: "paladinLevel3",
        level: 3,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Divine Health",
            def: [
              "By 3rd level, the divine magic flowing through you makes you immune to disease."
            ],
          },
          {
            name: "Sacred Oath",
            def: [
              "When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose the Oath of Devotion, the Oath of the Ancients, or the Oath of Vengeance, all detailed at the end of the class description.",
              "Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature."
            ],
          },
          {
            name: "Oath Spells",
            def: [
              "Each oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don’t count against the number of spells you can prepare each day.",
              "If you gain an oath spell that doesn’t appear on the paladin spell list, the spell is nonetheless a paladin spell for you."
            ],
          },
          {
            name: "Channel Divinity",
            def: [
              "Your oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it.",
              "When you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again.",
              "Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC."
            ],
          }
        ],
        spellcasting: {
          spell_slots_level_1: 3,
          spell_slots_level_2: 0,
          spell_slots_level_3: 0,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0
        },
        class_specific: {
          aura_range: 0
        },
        index: 123,
        class: {
          name: "Paladin"
        }
      },
      { _id: "paladinLevel4",
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
          spell_slots_level_1: 3,
          spell_slots_level_2: 0,
          spell_slots_level_3: 0,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0
        },
        class_specific: {
          aura_range: 0
        },
        index: 124,
        class: {
          name: "Paladin"
        }
      },
      { _id: "paladinLevel5",
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
          spell_slots_level_1: 4,
          spell_slots_level_2: 2,
          spell_slots_level_3: 0,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0
        },
        class_specific: {
          aura_range: 0
        },
        index: 125,
        class: {
          name: "Paladin"
        }
      },
      { _id: "paladinLevel6",
        level: 6,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Aura of Protection",
            def: [
              "Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.",
              "At 18th level, the range of this aura increases to 30 feet."
            ],
          }
        ],
        spell_slots_level_1: 4,
        spell_slots_level_2: 2,
        spell_slots_level_3: 0,
        spell_slots_level_4: 0,
        spell_slots_level_5: 0,
        aura_range: 10,
        index: 126,
        class: {
          name: "Paladin"
        }
      },
      { _id: "paladinLevel7",
        level: 7,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [],
        spell_slots_level_1: 4,
        spell_slots_level_2: 3,
        spell_slots_level_3: 0,
        spell_slots_level_4: 0,
        spell_slots_level_5: 0,
        aura_range: 10,
        index: 127,
        class: {
          name: "Paladin"
        }
      },
      { _id: "paladinLevel8",
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
        spell_slots_level_1: 4,
        spell_slots_level_2: 3,
        spell_slots_level_3: 0,
        spell_slots_level_4: 0,
        spell_slots_level_5: 0,
        aura_range: 10,
        index: 128,
        class: {
          name: "Paladin"
        }
      },
      { _id: "paladinLevel9",
        level: 9,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [],
        spell_slots_level_1: 4,
        spell_slots_level_2: 3,
        spell_slots_level_3: 2,
        spell_slots_level_4: 0,
        spell_slots_level_5: 0,
        aura_range: 10,
        index: 129,
        class: {
          name: "Paladin"
        }
      },
      { _id: "paladinLevel10",
        level: 10,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Aura of Courage",
            def: [
              "Starting at 10th level, you and friendly creatures within 10 feet of you can’t be frightened while you are conscious.",
              "At 18th level, the range of this aura increases to 30 feet."
            ],
          }
        ],
        spell_slots_level_1: 4,
        spell_slots_level_2: 3,
        spell_slots_level_3: 2,
        spell_slots_level_4: 0,
        spell_slots_level_5: 0,
        aura_range: 10,
        index: 130,
        class: {
          name: "Paladin"
        }
      },
      { _id: "paladinLevel11",
        level: 11,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Improved Divine Smite",
            def: [
              "By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage. If you also use your Divine Smite with an attack, you add this damage to the extra damage of your Divine Smite."
            ],
          }
        ],
        spell_slots_level_1: 4,
        spell_slots_level_2: 3,
        spell_slots_level_3: 3,
        spell_slots_level_4: 0,
        spell_slots_level_5: 0,
        aura_range: 10,
        index: 131,
        class: {
          name: "Paladin"
        }
      },
      { _id: "paladinLevel12",
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
        spell_slots_level_1: 4,
        spell_slots_level_2: 3,
        spell_slots_level_3: 3,
        spell_slots_level_4: 0,
        spell_slots_level_5: 0,
        aura_range: 10,
        index: 132,
        class: {
          name: "Paladin"
        }
      },
      { _id: "paladinLevel13",
        level: 13,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [],
        spell_slots_level_1: 4,
        spell_slots_level_2: 3,
        spell_slots_level_3: 3,
        spell_slots_level_4: 1,
        spell_slots_level_5: 0,
        aura_range: 10,
        index: 133,
        class: {
          name: "Paladin"
        }
      },
      { _id: "paladinLevel14",
        level: 14,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Cleansing Touch",
            def: [
              "Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.",
              "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest."
            ],
          }
        ],
        spell_slots_level_1: 4,
        spell_slots_level_2: 3,
        spell_slots_level_3: 3,
        spell_slots_level_4: 1,
        spell_slots_level_5: 0,
        aura_range: 10,
        index: 134,
        class: {
          name: "Paladin"
        }
      },
      { _id: "paladinLevel15",
        level: 15,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [],
        spellcasting: {
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 2,
          spell_slots_level_5: 0
        },
        class_specific: {
          aura_range: 0
        },
        index: 135,
        class: {
          name: "Paladin"
        }
      },
      { _id: "paladinLevel16",
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
        spell_slots_level_1: 4,
        spell_slots_level_2: 3,
        spell_slots_level_3: 3,
        spell_slots_level_4: 2,
        spell_slots_level_5: 0,
        aura_range: 10,
        index: 136,
        class: {
          name: "Paladin"
        }
      },
      { _id: "paladinLevel17",
        level: 17,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        feature_choices: [],
        features: [],
        spell_slots_level_1: 4,
        spell_slots_level_2: 3,
        spell_slots_level_3: 3,
        spell_slots_level_4: 3,
        spell_slots_level_5: 1,
        aura_range: 10,
        index: 137,
        class: {
          name: "Paladin"
        }
      },
      { _id: "paladinLevel18",
        level: 18,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Aura Improvements",
            def: [
              "At 18th level, the range of your auras increase to 30 feet."
            ],
          }
        ],
        spell_slots_level_1: 4,
        spell_slots_level_2: 3,
        spell_slots_level_3: 3,
        spell_slots_level_4: 3,
        spell_slots_level_5: 1,
        aura_range: 30,
        index: 138,
        class: {
          name: "Paladin"
        }
      },
      { _id: "paladinLevel19",
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
        spell_slots_level_1: 4,
        spell_slots_level_2: 3,
        spell_slots_level_3: 3,
        spell_slots_level_4: 3,
        spell_slots_level_5: 2,
        aura_range: 30,
        index: 139,
        class: {
          name: "Paladin"
        }
      },
      { _id: "paladinLevel20",
        level: 20,
        ability_score_bonuses: 5,
        prof_bonus: 6,
        feature_choices: [],
        features: [],
        spell_slots_level_1: 4,
        spell_slots_level_2: 3,
        spell_slots_level_3: 3,
        spell_slots_level_4: 3,
        spell_slots_level_5: 2,
        aura_range: 30,
        index: 140,
        class: {
          name: "Paladin"
        }
      }
    ]
  }
];
