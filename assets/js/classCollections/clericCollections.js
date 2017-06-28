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
      { _id: "clericLevel1",
        level: 1,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Spellcasting",
            def: [
              "As a conduit for divine power, you can cast cleric spells."
            ]
          },
          {
            name: "Divine Domain",
            def: [
              "Choose one domain related to your deity: Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Only the Life domain is detailed in the Open Game Licensed SRD. Additional Domains are described in the official rulebooks or products from other publishers.",
              "Your domain grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels."
            ],
          },
          {
            name: "Domain Spells 1",
            def: [
              "Each domain has a list of spells—its domain spells— that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.",
              "If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
            ]
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
      { _id: "clericLevel2",
        level: 2,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Channel Divinity (1/rest)",
            desc: [
              "At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.",
              "When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.",
              "Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.",
              "Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses."
            ],
          },
          {
            name: "Channel Divinity: Turn Undead",
            def: [
              "As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.",
              "A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action."
            ],
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
      { _id: "clericLevel3",
        level: 3,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Domain Spells 2",
            def: [
              "Each domain has a list of spells—its domain spells— that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.",
              "If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
            ],
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
      { _id: "clericLevel4",
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
      { _id: "clericLevel5",
        level: 5,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Domain Spells 3",
            def: [
              "Each domain has a list of spells—its domain spells— that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.",
              "If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
            ],
          },
          {
            name: "Destroy Undead (CR 1/2 or below)",
            def: [
              "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
            ],
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
      { _id: "clericLevel6",
        level: 6,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Channel Divinity (2/rest)",
            def: [
              "Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses."
            ],
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
      { _id: "clericLevel7",
        level: 7,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Domain Spells 4",
            def: [
              "Each domain has a list of spells—its domain spells— that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.",
              "If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
            ],
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
      { _id: "clericLevel18",
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
            name: "Destroy Undead (CR 1 or below)",
            def: [
              "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
            ],
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
      { _id: "clericLevel9",
        level: 9,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Domain Spells 5",
            def: [
              "Each domain has a list of spells—its domain spells— that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.",
              "If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
            ],
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
      { _id: "clericLevel10",
        level: 10,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Divine Intervention",
            def: [
              "Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.",
              "Imploring your deity’s aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The GM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate.",
              "If your deity intervenes, you can’t use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.",
              "At 20th level, your call for intervention succeeds automatically, no roll required."
            ],
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
      { _id: "clericLevel11",
        level: 11,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Destroy Undead (CR 2 or below)",
            def: [
              "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
            ],
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
      { _id: "clericLevel12",
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
      { _id: "clericLevel13",
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
      { _id: "clericLevel14",
        level: 14,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Destroy Undead (CR 3 or below)",
            def: [
              "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
            ],
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
      { _id: "clericLevel15",
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
      { _id: "clericLevel16",
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
      { _id: "clericLevel17",
        level: 17,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Destroy Undead (CR 4 or below)",
            def: [
              "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
            ],
          },
          {
            name: "Supreme Healing",
            def: [
              "Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12."
            ],
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
      { _id: "clericLevel18",
        level: 18,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Channel Divinity (3/rest)",
            def: [
              "Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses."
            ],
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
      { _id: "clericLevel19",
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
      { _id: "clericLevel20",
        level: 20,
        ability_score_bonuses: 5,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Divine Intervention Improvement",
            def: [
              "At 20th level, your call for intervention succeeds automatically, no roll required."
            ],
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
