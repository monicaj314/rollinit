[
  {
    _id: "clericClass",
    name: "Cleric",
    hit_die: 8,
    skillChoices: [
      {
        from: [
          {
            name: "Skill: History"
          },
          {
            name: "Skill: Insight"
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
      class: "Cleric"
    },
    class_levels: {
      class: "Cleric"
    },
    subclasses: [
      {
        name: "Life"
      }
    ],
    spellcasting: {
      class: "Cleric"
    },

    featuresArray: [
      {
        _id: "clericLevel1",
        level: 1,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Spellcasting"
          },
          {
            name: "Divine Domain"
          },
          {
            name: "Domain Spells 1"
          }
        ],
        spellcasting: {
          cantrips_known: 3,
          spells_known: 4,
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
          channel_divinity_charges: 0,
          destroy_undead_cr: 0
        },
        index: 41,
        class: {
          name: "Cleric"
        }
      },
      {
        _id: "58f40badc9e7ce9f72153451",
        level: 2,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Channel Divinity (1/rest)"
          },
          {
            name: "Channel Divinity: Turn Undead"
          }
        ],
        spellcasting: {
          cantrips_known: 3,
          spells_known: 5,
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
          channel_divinity_charges: 1,
          destroy_undead_cr: 0
        },
        index: 42,
        class: {
          name: "Cleric"
        }
      },
      {
        _id: "58f40badc9e7ce9f72153452",
        level: 3,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Domain Spells 2"
          }
        ],
        spellcasting: {
          cantrips_known: 3,
          spells_known: 6,
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
          channel_divinity_charges: 1,
          destroy_undead_cr: 0
        },
        index: 43,
        class: {
          name: "Cleric"
        }
      },
      {
        _id: "58f40badc9e7ce9f72153459",
        level: 4,
        ability_score_bonuses: 1,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 1"
          }
        ],
        spellcasting: {
          cantrips_known: 4,
          spells_known: 7,
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
          channel_divinity_charges: 1,
          destroy_undead_cr: 0
        },
        index: 44,
        class: {
          name: "Cleric"
        }
      },
      {
        _id: "58f40badc9e7ce9f7215345b",
        level: 5,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Domain Spells 3"
          },
          {
            name: "Destroy Undead (CR 1/2 or below)"
          }
        ],
        spellcasting: {
          cantrips_known: 4,
          spells_known: 8,
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
          channel_divinity_charges: 1,
          destroy_undead_cr: 0.5
        },
        index: 45,
        class: {
          name: "Cleric"
        }
      },
      {
        _id: "58f40badc9e7ce9f72153454",
        level: 6,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Channel Divinity (2/rest)"
          }
        ],
        spellcasting: {
          cantrips_known: 4,
          spells_known: 9,
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
          channel_divinity_charges: 2,
          destroy_undead_cr: 0.5
        },
        index: 46,
        class: {
          name: "Cleric"
        }
      },
      {
        _id: "58f40badc9e7ce9f72153453",
        level: 7,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Domain Spells 4"
          }
        ],
        spellcasting: {
          cantrips_known: 4,
          spells_known: 10,
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
          channel_divinity_charges: 2,
          destroy_undead_cr: 0.5
        },
        index: 47,
        class: {
          name: "Cleric"
        }
      },
      {
        _id: "58f40badc9e7ce9f72153455",
        level: 8,
        ability_score_bonuses: 2,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 2"
          },
          {
            name: "Destroy Undead (CR 1 or below)"
          }
        ],
        spellcasting: {
          cantrips_known: 4,
          spells_known: 11,
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
          channel_divinity_charges: 2,
          destroy_undead_cr: 1
        },
        index: 48,
        class: {
          name: "Cleric"
        }
      },
      {
        _id: "58f40badc9e7ce9f72153456",
        level: 9,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Domain Spells 5"
          }
        ],
        spellcasting: {
          cantrips_known: 4,
          spells_known: 12,
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
          channel_divinity_charges: 2,
          destroy_undead_cr: 1
        },
        index: 49,
        class: {
          name: "Cleric"
        }
      },
      {
        _id: "58f40badc9e7ce9f72153457",
        level: 10,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Divine Intervention"
          }
        ],
        spellcasting: {
          cantrips_known: 5,
          spells_known: 14,
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
          channel_divinity_charges: 2,
          destroy_undead_cr: 1
        },
        index: 50,
        class: {
          name: "Cleric"
        }
      },
      {
        _id: "58f40badc9e7ce9f72153458",
        level: 11,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Destroy Undead (CR 2 or below)"
          }
        ],
        spellcasting: {
          cantrips_known: 5,
          spells_known: 15,
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
          channel_divinity_charges: 2,
          destroy_undead_cr: 2
        },
        index: 51,
        class: {
          name: "Cleric"
        }
      },
      {
        _id: "58f40badc9e7ce9f7215345a",
        level: 12,
        ability_score_bonuses: 3,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 3"
          }
        ],
        spellcasting: {
          cantrips_known: 5,
          spells_known: 15,
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
          channel_divinity_charges: 2,
          destroy_undead_cr: 2
        },
        index: 52,
        class: {
          name: "Cleric"
        }
      },
      {
        _id: "58f40badc9e7ce9f7215345c",
        level: 13,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 5,
          spells_known: 16,
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
          channel_divinity_charges: 2,
          destroy_undead_cr: 2
        },
        index: 53,
        class: {
          name: "Cleric"
        }
      },
      {
        _id: "58f40badc9e7ce9f7215345e",
        level: 14,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Destroy Undead (CR 3 or below)"
          }
        ],
        spellcasting: {
          cantrips_known: 5,
          spells_known: 18,
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
          channel_divinity_charges: 2,
          destroy_undead_cr: 3
        },
        index: 54,
        class: {
          name: "Cleric"
        }
      },
      {
        _id: "58f40badc9e7ce9f72153464",
        level: 15,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [],
        spellcasting: {
          cantrips_known: 5,
          spells_known: 19,
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
          channel_divinity_charges: 2,
          destroy_undead_cr: 3
        },
        index: 55,
        class: {
          name: "Cleric"
        }
      },
      {
        _id: "58f40badc9e7ce9f7215345f",
        level: 16,
        ability_score_bonuses: 4,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 4"
          }
        ],
        spellcasting: {
          cantrips_known: 5,
          spells_known: 19,
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
          channel_divinity_charges: 2,
          destroy_undead_cr: 3
        },
        index: 56,
        class: {
          name: "Cleric"
        }
      },
      {
        _id: "58f40badc9e7ce9f7215345d",
        level: 17,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Destroy Undead (CR 4 or below)"
          },
          {
            name: "Supreme Healing"
          }
        ],
        spellcasting: {
          cantrips_known: 5,
          spells_known: 20,
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
          channel_divinity_charges: 2,
          destroy_undead_cr: 4
        },
        index: 57,
        class: {
          name: "Cleric"
        }
      },
      {
        _id: "58f40badc9e7ce9f72153461",
        level: 18,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Channel Divinity (3/rest)"
          }
        ],
        spellcasting: {
          cantrips_known: 5,
          spells_known: 22,
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
          channel_divinity_charges: 3,
          destroy_undead_cr: 4
        },
        index: 58,
        class: {
          name: "Cleric"
        }
      },
      {
        _id: "58f40badc9e7ce9f72153460",
        level: 19,
        ability_score_bonuses: 5,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 5"
          }
        ],
        spellcasting: {
          cantrips_known: 5,
          spells_known: 22,
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
          channel_divinity_charges: 3,
          destroy_undead_cr: 4
        },
        index: 59,
        class: {
          name: "Cleric"
        }
      },
      {
        _id: "58f40badc9e7ce9f72153462",
        level: 20,
        ability_score_bonuses: 5,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Divine Intervention Improvement"
          }
        ],
        spellcasting: {
          cantrips_known: 5,
          spells_known: 22,
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
          channel_divinity_charges: 3,
          destroy_undead_cr: 4
        },
        index: 60,
        class: {
          name: "Cleric"
        }
      }
    ]
  }
];
