[
  {
    _id: "592d1ed5c9e7ce9f72157c71",
    index: 12,
    name: "Wizard",
    hit_die: 6,
    proficiency_choices: [
      {
        from: [
          {
            name: "Skill: Arcana"
          },
          {
            name: "Skill: History"
          },
          {
            name: "Skill: Insight"
          },
          {
            name: "Skill: Investigation"
          },
          {
            name: "Skill: Medicine"
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
        name: "Daggers"
      },
      {
        name: "Quarterstaffs"
      },
      {
        name: "Darts"
      },
      {
        name: "Slings"
      }
    ],
    saving_throws: [
      {
        name: "INT"
      },
      {
        name: "WIS"
      }
    ],
    starting_equipment: {
      class: "Wizard"
    },
    class_levels: {
      class: "Wizard"
    },
    subclasses: [
      {
        name: "Evocation"
      }
    ],
    spellcasting: {
      class: "Wizard"
    },

    featuresArray: [
      { _id: "wizardLevel1",
        level: 1,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Spellcasting",
            def: [
              "As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power."
            ],
          },
          {
            name: "Arcane Recovery",
            def: [
              "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.",
              "For example, if you’re a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots."
            ],
          }
        ],
        spellcasting: {
          cantrips_known: 3,
          spell_slots_level_1: 2,
          spell_slots_level_2: 0,
          spell_slots_level_3: 0,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0,
          spell_slots_level_6: 0,
          spell_slots_level_7: 0,
          spell_slots_level_8: 0,
          spell_slots_level_9: 0
        },
        class_specific: {
          arcane_recovery_levels: 1
        },
        index: 221,
        class: {
          name: "Wizard"
        }
      },
      { _id: "wizardLevel2",
        level: 2,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Arcane Tradition",
            def: [
              "When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, or Transmutation, all detailed at the end of the class description.",
              "Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
            ],
          }
        ],
        spellcasting: {
          cantrips_known: 3,
          spell_slots_level_1: 3,
          spell_slots_level_2: 0,
          spell_slots_level_3: 0,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0,
          spell_slots_level_6: 0,
          spell_slots_level_7: 0,
          spell_slots_level_8: 0,
          spell_slots_level_9: 0
        },
        class_specific: {
          arcane_recovery_levels: 1
        },
        index: 222,
        class: {
          name: "Wizard"
        }
      },
      { _id: "wizardLevel3",
        level: 3,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 3,
          spell_slots_level_1: 4,
          spell_slots_level_2: 2,
          spell_slots_level_3: 0,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0,
          spell_slots_level_6: 0,
          spell_slots_level_7: 0,
          spell_slots_level_8: 0,
          spell_slots_level_9: 0
        },
        class_specific: {
          arcane_recovery_levels: 2
        },
        index: 223,
        class: {
          name: "Wizard"
        }
      },
      { _id: "wizardLevel4",
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
          cantrips_known: 4,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 0,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0,
          spell_slots_level_6: 0,
          spell_slots_level_7: 0,
          spell_slots_level_8: 0,
          spell_slots_level_9: 0
        },
        class_specific: {
          arcane_recovery_levels: 2
        },
        index: 224,
        class: {
          name: "Wizard"
        }
      },
      { _id: "wizardLevel5",
        level: 5,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 4,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 2,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0,
          spell_slots_level_6: 0,
          spell_slots_level_7: 0,
          spell_slots_level_8: 0,
          spell_slots_level_9: 0
        },
        class_specific: {
          arcane_recovery_levels: 3
        },
        index: 225,
        class: {
          name: "Wizard"
        }
      },
      { _id: "wizardLevel6",
        level: 6,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 4,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 0,
          spell_slots_level_5: 0,
          spell_slots_level_6: 0,
          spell_slots_level_7: 0,
          spell_slots_level_8: 0,
          spell_slots_level_9: 0
        },
        class_specific: {
          arcane_recovery_levels: 3
        },
        index: 226,
        class: {
          name: "Wizard"
        }
      },
      { _id: "wizardLevel7",
        level: 7,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 4,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 1,
          spell_slots_level_5: 0,
          spell_slots_level_6: 0,
          spell_slots_level_7: 0,
          spell_slots_level_8: 0,
          spell_slots_level_9: 0
        },
        class_specific: {
          arcane_recovery_levels: 4
        },
        index: 227,
        class: {
          name: "Wizard"
        }
      },
      { _id: "wizardLevel8",
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
        spellcasting: {
          cantrips_known: 4,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 2,
          spell_slots_level_5: 0,
          spell_slots_level_6: 0,
          spell_slots_level_7: 0,
          spell_slots_level_8: 0,
          spell_slots_level_9: 0
        },
        class_specific: {
          arcane_recovery_levels: 4
        },
        index: 228,
        class: {
          name: "Wizard"
        }
      },
      { _id: "wizardLevel9",
        level: 9,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 4,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 3,
          spell_slots_level_5: 1,
          spell_slots_level_6: 0,
          spell_slots_level_7: 0,
          spell_slots_level_8: 0,
          spell_slots_level_9: 0
        },
        class_specific: {
          arcane_recovery_levels: 5
        },
        index: 229,
        class: {
          name: "Wizard"
        }
      },
      { _id: "wizardLevel0",
        level: 10,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 5,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 3,
          spell_slots_level_5: 2,
          spell_slots_level_6: 0,
          spell_slots_level_7: 0,
          spell_slots_level_8: 0,
          spell_slots_level_9: 0
        },
        class_specific: {
          arcane_recovery_levels: 5
        },
        index: 230,
        class: {
          name: "Wizard"
        }
      },
      { _id: "wizardLevel11",
        level: 11,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 5,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 3,
          spell_slots_level_5: 2,
          spell_slots_level_6: 1,
          spell_slots_level_7: 0,
          spell_slots_level_8: 0,
          spell_slots_level_9: 0
        },
        class_specific: {
          arcane_recovery_levels: 6
        },
        index: 231,
        class: {
          name: "Wizard"
        }
      },
      { _id: "wizardLevel12",
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
        spellcasting: {
          cantrips_known: 5,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 3,
          spell_slots_level_5: 2,
          spell_slots_level_6: 1,
          spell_slots_level_7: 0,
          spell_slots_level_8: 0,
          spell_slots_level_9: 0
        },
        class_specific: {
          arcane_recovery_levels: 6
        },
        index: 232,
        class: {
          name: "Wizard"
        }
      },
      { _id: "wizardLevel13",
        level: 13,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 5,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 3,
          spell_slots_level_5: 2,
          spell_slots_level_6: 1,
          spell_slots_level_7: 1,
          spell_slots_level_8: 0,
          spell_slots_level_9: 0
        },
        class_specific: {
          arcane_recovery_levels: 7
        },
        index: 233,
        class: {
          name: "Wizard"
        }
      },
      { _id: "wizardLevel14",
        level: 14,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 5,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 3,
          spell_slots_level_5: 2,
          spell_slots_level_6: 1,
          spell_slots_level_7: 1,
          spell_slots_level_8: 0,
          spell_slots_level_9: 0
        },
        class_specific: {
          arcane_recovery_levels: 7
        },
        index: 234,
        class: {
          name: "Wizard"
        }
      },
      { _id: "wizardLevel15",
        level: 15,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 5,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 3,
          spell_slots_level_5: 2,
          spell_slots_level_6: 1,
          spell_slots_level_7: 1,
          spell_slots_level_8: 1,
          spell_slots_level_9: 0
        },
        class_specific: {
          arcane_recovery_levels: 8
        },
        index: 235,
        class: {
          name: "Wizard"
        }
      },
      { _id: "wizardLevel16",
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
          cantrips_known: 5,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 3,
          spell_slots_level_5: 2,
          spell_slots_level_6: 1,
          spell_slots_level_7: 1,
          spell_slots_level_8: 1,
          spell_slots_level_9: 0
        },
        class_specific: {
          arcane_recovery_levels: 8
        },
        index: 236,
        class: {
          name: "Wizard"
        }
      },
      { _id: "wizardLevel17",
        level: 17,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 5,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 3,
          spell_slots_level_5: 2,
          spell_slots_level_6: 1,
          spell_slots_level_7: 1,
          spell_slots_level_8: 1,
          spell_slots_level_9: 1
        },
        class_specific: {
          arcane_recovery_levels: 9
        },
        index: 237,
        class: {
          name: "Wizard"
        }
      },
      { _id: "wizardLevel18",
        level: 18,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Spell Mastery",
            def: [
              "Starting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell.",
              "The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity."
            ],
          }
        ],
        spellcasting: {
          cantrips_known: 5,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 3,
          spell_slots_level_5: 3,
          spell_slots_level_6: 1,
          spell_slots_level_7: 1,
          spell_slots_level_8: 1,
          spell_slots_level_9: 1
        },
        class_specific: {
          arcane_recovery_levels: 9
        },
        index: 238,
        class: {
          name: "Wizard"
        }
      },
      { _id: "wizardLevel19",
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
          cantrips_known: 5,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 3,
          spell_slots_level_5: 3,
          spell_slots_level_6: 2,
          spell_slots_level_7: 1,
          spell_slots_level_8: 1,
          spell_slots_level_9: 1
        },
        class_specific: {
          arcane_recovery_levels: 10
        },
        index: 239,
        class: {
          name: "Wizard"
        }
      },
      { _id: "wizardLevel20",
        level: 20,
        ability_score_bonuses: 5,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Signature Spell",
            def: [
              "At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.",
              "By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels."
            ],
          }
        ],
        spellcasting: {
          cantrips_known: 5,
          spell_slots_level_1: 4,
          spell_slots_level_2: 3,
          spell_slots_level_3: 3,
          spell_slots_level_4: 3,
          spell_slots_level_5: 3,
          spell_slots_level_6: 2,
          spell_slots_level_7: 2,
          spell_slots_level_8: 1,
          spell_slots_level_9: 1
        },
        class_specific: {
          arcane_recovery_levels: 10
        },
        index: 240,
        class: {
          name: "Wizard"
        }
      }
    ]
  }
];
