[
  {
    _id: "592d1ed5c9e7ce9f72157c72",
    index: 10,
    name: "Sorcerer",
    hit_die: 6,
    proficiency_choices: [
      {
        from: [
          {
            name: "Skill: Arcana"
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
        name: "CON"
      },
      {
        name: "CHA"
      }
    ],
    starting_equipment: {
      class: "Sorcerer"
    },
    class_levels: {
      class: "Sorcerer"
    },
    subclasses: [
      {
        name: "Draconic"
      }
    ],
    spellcasting: {
      class: "Sorcerer"
    },

    featuresArray: [
      { _id: "sorcererLevel1",
        level: 1,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Spellcasting",
            def: [
              "An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells."
            ],
          },
          {
            name: "Sorcerous Origin",
            def: [
              "Choose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline or Wild Magic, both detailed at the end of the class description.",
              "Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level."
            ],
          }
        ],
        spellcasting: {
          cantrips_known: 4,
          spells_known: 2,
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
          sorcery_points: 0,
          metamagic_known: 0,
          creating_spell_slots: []
        },
        index: 181,
        class: {
          name: "Sorcerer"
        }
      },
      { _id: "sorcererLevel2",
        level: 2,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Font of Magic",
            def: [
              "At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.",
              "Sorcery Points",
              "You have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest."
            ],
          },
          {
            name: "Flexible Casting: Creating Spell Slots",
            def: [
              "You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th. ",
              "Any spell slot you create with this feature vanishes when you finish a long rest."
            ],
          },
          {
            name: "Flexible Casting: Converting Spell Slot",
            def: [
              "As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot’s level.."
            ],
          }
        ],
        spellcasting: {
          cantrips_known: 4,
          spells_known: 3,
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
          sorcery_points: 2,
          metamagic_known: 0,
          creating_spell_slots: [
            {
              sorcery_point_cost: 2,
              spell_slot_level: 1
            },
            {
              sorcery_point_cost: 3,
              spell_slot_level: 2
            },
            {
              sorcery_point_cost: 5,
              spell_slot_level: 3
            },
            {
              sorcery_point_cost: 6,
              spell_slot_level: 4
            },
            {
              sorcery_point_cost: 7,
              spell_slot_level: 5
            }
          ]
        },
        index: 182,
        class: {
          name: "Sorcerer"
        }
      },
      { _id: "sorcererLevel3",
        level: 3,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [
          {
            name: "Choose: Metamagic, First and Second"
          }
        ],
        features: [],
        spellcasting: {
          cantrips_known: 4,
          spells_known: 4,
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
          sorcery_points: 3,
          metamagic_known: 2,
          creating_spell_slots: [
            {
              sorcery_point_cost: 2,
              spell_slot_level: 1
            },
            {
              sorcery_point_cost: 3,
              spell_slot_level: 2
            },
            {
              sorcery_point_cost: 5,
              spell_slot_level: 3
            },
            {
              sorcery_point_cost: 6,
              spell_slot_level: 4
            },
            {
              sorcery_point_cost: 7,
              spell_slot_level: 5
            }
          ]
        },
        index: 183,
        class: {
          name: "Sorcerer"
        }
      },
      { _id: "sorcererLevel4",
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
          cantrips_known: 5,
          spells_known: 5,
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
          sorcery_points: 4,
          metamagic_known: 2,
          creating_spell_slots: [
            {
              sorcery_point_cost: 2,
              spell_slot_level: 1
            },
            {
              sorcery_point_cost: 3,
              spell_slot_level: 2
            },
            {
              sorcery_point_cost: 5,
              spell_slot_level: 3
            },
            {
              sorcery_point_cost: 6,
              spell_slot_level: 4
            },
            {
              sorcery_point_cost: 7,
              spell_slot_level: 5
            }
          ]
        },
        index: 184,
        class: {
          name: "Sorcerer"
        }
      },
      { _id: "sorcererLevel5",
        level: 5,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 5,
          spells_known: 6,
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
          sorcery_points: 5,
          metamagic_known: 2,
          creating_spell_slots: [
            {
              sorcery_point_cost: 2,
              spell_slot_level: 1
            },
            {
              sorcery_point_cost: 3,
              spell_slot_level: 2
            },
            {
              sorcery_point_cost: 5,
              spell_slot_level: 3
            },
            {
              sorcery_point_cost: 6,
              spell_slot_level: 4
            },
            {
              sorcery_point_cost: 7,
              spell_slot_level: 5
            }
          ]
        },
        index: 185,
        class: {
          name: "Sorcerer"
        }
      },
      { _id: "sorcererLevel6",
        level: 6,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 5,
          spells_known: 7,
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
          sorcery_points: 6,
          metamagic_known: 2,
          creating_spell_slots: [
            {
              sorcery_point_cost: 2,
              spell_slot_level: 1
            },
            {
              sorcery_point_cost: 3,
              spell_slot_level: 2
            },
            {
              sorcery_point_cost: 5,
              spell_slot_level: 3
            },
            {
              sorcery_point_cost: 6,
              spell_slot_level: 4
            },
            {
              sorcery_point_cost: 7,
              spell_slot_level: 5
            }
          ]
        },
        index: 186,
        class: {
          name: "Sorcerer"
        }
      },
      { _id: "sorcererLevel7",
        level: 7,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 5,
          spells_known: 8,
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
          sorcery_points: 7,
          metamagic_known: 2,
          creating_spell_slots: [
            {
              sorcery_point_cost: 2,
              spell_slot_level: 1
            },
            {
              sorcery_point_cost: 3,
              spell_slot_level: 2
            },
            {
              sorcery_point_cost: 5,
              spell_slot_level: 3
            },
            {
              sorcery_point_cost: 6,
              spell_slot_level: 4
            },
            {
              sorcery_point_cost: 7,
              spell_slot_level: 5
            }
          ]
        },
        index: 187,
        class: {
          name: "Sorcerer"
        }
      },
      { _id: "sorcererLevel8",
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
          cantrips_known: 5,
          spells_known: 9,
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
          sorcery_points: 8,
          metamagic_known: 2,
          creating_spell_slots: [
            {
              sorcery_point_cost: 2,
              spell_slot_level: 1
            },
            {
              sorcery_point_cost: 3,
              spell_slot_level: 2
            },
            {
              sorcery_point_cost: 5,
              spell_slot_level: 3
            },
            {
              sorcery_point_cost: 6,
              spell_slot_level: 4
            },
            {
              sorcery_point_cost: 7,
              spell_slot_level: 5
            }
          ]
        },
        index: 188,
        class: {
          name: "Sorcerer"
        }
      },
      { _id: "sorcererLevel9",
        level: 9,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 5,
          spells_known: 10,
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
          sorcery_points: 9,
          metamagic_known: 2,
          creating_spell_slots: [
            {
              sorcery_point_cost: 2,
              spell_slot_level: 1
            },
            {
              sorcery_point_cost: 3,
              spell_slot_level: 2
            },
            {
              sorcery_point_cost: 5,
              spell_slot_level: 3
            },
            {
              sorcery_point_cost: 6,
              spell_slot_level: 4
            },
            {
              sorcery_point_cost: 7,
              spell_slot_level: 5
            }
          ]
        },
        index: 189,
        class: {
          name: "Sorcerer"
        }
      },
      { _id: "sorcererLevel10",
        level: 10,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [
          {
            name: "Choose: Metamagic, Third"
          }
        ],
        features: [],
        spellcasting: {
          cantrips_known: 6,
          spells_known: 11,
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
          sorcery_points: 10,
          metamagic_known: 3,
          creating_spell_slots: [
            {
              sorcery_point_cost: 2,
              spell_slot_level: 1
            },
            {
              sorcery_point_cost: 3,
              spell_slot_level: 2
            },
            {
              sorcery_point_cost: 5,
              spell_slot_level: 3
            },
            {
              sorcery_point_cost: 6,
              spell_slot_level: 4
            },
            {
              sorcery_point_cost: 7,
              spell_slot_level: 5
            }
          ]
        },
        index: 190,
        class: {
          name: "Sorcerer"
        }
      },
      { _id: "sorcererLevel11",
        level: 11,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 6,
          spells_known: 12,
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
          sorcery_points: 11,
          metamagic_known: 3,
          creating_spell_slots: [
            {
              sorcery_point_cost: 2,
              spell_slot_level: 1
            },
            {
              sorcery_point_cost: 3,
              spell_slot_level: 2
            },
            {
              sorcery_point_cost: 5,
              spell_slot_level: 3
            },
            {
              sorcery_point_cost: 6,
              spell_slot_level: 4
            },
            {
              sorcery_point_cost: 7,
              spell_slot_level: 5
            }
          ]
        },
        index: 191,
        class: {
          name: "Sorcerer"
        }
      },
      { _id: "sorcererLevel12",
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
          cantrips_known: 6,
          spells_known: 12,
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
          sorcery_points: 12,
          metamagic_known: 3,
          creating_spell_slots: [
            {
              sorcery_point_cost: 2,
              spell_slot_level: 1
            },
            {
              sorcery_point_cost: 3,
              spell_slot_level: 2
            },
            {
              sorcery_point_cost: 5,
              spell_slot_level: 3
            },
            {
              sorcery_point_cost: 6,
              spell_slot_level: 4
            },
            {
              sorcery_point_cost: 7,
              spell_slot_level: 5
            }
          ]
        },
        index: 192,
        class: {
          name: "Sorcerer"
        }
      },
      { _id: "sorcererLevel13",
        level: 13,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 6,
          spells_known: 13,
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
          sorcery_points: 13,
          metamagic_known: 3,
          creating_spell_slots: [
            {
              sorcery_point_cost: 2,
              spell_slot_level: 1
            },
            {
              sorcery_point_cost: 3,
              spell_slot_level: 2
            },
            {
              sorcery_point_cost: 5,
              spell_slot_level: 3
            },
            {
              sorcery_point_cost: 6,
              spell_slot_level: 4
            },
            {
              sorcery_point_cost: 7,
              spell_slot_level: 5
            }
          ]
        },
        index: 193,
        class: {
          name: "Sorcerer"
        }
      },
      { _id: "sorcererLevel14",
        level: 14,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 6,
          spells_known: 13,
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
          sorcery_points: 14,
          metamagic_known: 3,
          creating_spell_slots: [
            {
              sorcery_point_cost: 2,
              spell_slot_level: 1
            },
            {
              sorcery_point_cost: 3,
              spell_slot_level: 2
            },
            {
              sorcery_point_cost: 5,
              spell_slot_level: 3
            },
            {
              sorcery_point_cost: 6,
              spell_slot_level: 4
            },
            {
              sorcery_point_cost: 7,
              spell_slot_level: 5
            }
          ]
        },
        index: 194,
        class: {
          name: "Sorcerer"
        }
      },
      { _id: "sorcererLevel15",
        level: 15,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 6,
          spells_known: 14,
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
          sorcery_points: 15,
          metamagic_known: 3,
          creating_spell_slots: [
            {
              sorcery_point_cost: 2,
              spell_slot_level: 1
            },
            {
              sorcery_point_cost: 3,
              spell_slot_level: 2
            },
            {
              sorcery_point_cost: 5,
              spell_slot_level: 3
            },
            {
              sorcery_point_cost: 6,
              spell_slot_level: 4
            },
            {
              sorcery_point_cost: 7,
              spell_slot_level: 5
            }
          ]
        },
        index: 195,
        class: {
          name: "Sorcerer"
        }
      },
      { _id: "sorcererLevel16",
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
          cantrips_known: 6,
          spells_known: 14,
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
          sorcery_points: 16,
          metamagic_known: 4,
          creating_spell_slots: [
            {
              sorcery_point_cost: 2,
              spell_slot_level: 1
            },
            {
              sorcery_point_cost: 3,
              spell_slot_level: 2
            },
            {
              sorcery_point_cost: 5,
              spell_slot_level: 3
            },
            {
              sorcery_point_cost: 6,
              spell_slot_level: 4
            },
            {
              sorcery_point_cost: 7,
              spell_slot_level: 5
            }
          ]
        },
        index: 196,
        class: {
          name: "Sorcerer"
        }
      },
      { _id: "sorcererLevel17",
        level: 17,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        feature_choices: [
          {
            name: "Choose: Metamagic, Fourth"
          }
        ],
        features: [],
        spellcasting: {
          cantrips_known: 6,
          spells_known: 15,
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
          sorcery_points: 17,
          metamagic_known: 4,
          creating_spell_slots: [
            {
              sorcery_point_cost: 2,
              spell_slot_level: 1
            },
            {
              sorcery_point_cost: 3,
              spell_slot_level: 2
            },
            {
              sorcery_point_cost: 5,
              spell_slot_level: 3
            },
            {
              sorcery_point_cost: 6,
              spell_slot_level: 4
            },
            {
              sorcery_point_cost: 7,
              spell_slot_level: 5
            }
          ]
        },
        index: 197,
        class: {
          name: "Sorcerer"
        }
      },
      { _id: "sorcererLevel18",
        level: 18,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 6,
          spells_known: 15,
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
          sorcery_points: 18,
          metamagic_known: 4,
          creating_spell_slots: [
            {
              sorcery_point_cost: 2,
              spell_slot_level: 1
            },
            {
              sorcery_point_cost: 3,
              spell_slot_level: 2
            },
            {
              sorcery_point_cost: 5,
              spell_slot_level: 3
            },
            {
              sorcery_point_cost: 6,
              spell_slot_level: 4
            },
            {
              sorcery_point_cost: 7,
              spell_slot_level: 5
            }
          ]
        },
        index: 198,
        class: {
          name: "Sorcerer"
        }
      },
      { _id: "sorcererLevel19",
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
          cantrips_known: 6,
          spells_known: 15,
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
          sorcery_points: 19,
          metamagic_known: 4,
          creating_spell_slots: [
            {
              sorcery_point_cost: 2,
              spell_slot_level: 1
            },
            {
              sorcery_point_cost: 3,
              spell_slot_level: 2
            },
            {
              sorcery_point_cost: 5,
              spell_slot_level: 3
            },
            {
              sorcery_point_cost: 6,
              spell_slot_level: 4
            },
            {
              sorcery_point_cost: 7,
              spell_slot_level: 5
            }
          ]
        },
        index: 199,
        class: {
          name: "Sorcerer"
        }
      },
      { _id: "sorcererLevel20",
        level: 20,
        ability_score_bonuses: 5,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Sorcerous Restoration",
            def: [
              "At 20th level, you regain 4 expended sorcery points whenever you finish a short rest."
            ],
          }
        ],
        spellcasting: {
          cantrips_known: 6,
          spells_known: 15,
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
          sorcery_points: 20,
          metamagic_known: 4,
          creating_spell_slots: [
            {
              sorcery_point_cost: 2,
              spell_slot_level: 1
            },
            {
              sorcery_point_cost: 3,
              spell_slot_level: 2
            },
            {
              sorcery_point_cost: 5,
              spell_slot_level: 3
            },
            {
              sorcery_point_cost: 6,
              spell_slot_level: 4
            },
            {
              sorcery_point_cost: 7,
              spell_slot_level: 5
            }
          ]
        },
        index: 200,
        class: {
          name: "Sorcerer"
        }
      }
    ]
  }
];
