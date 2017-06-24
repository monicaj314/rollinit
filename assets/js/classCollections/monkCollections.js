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
      {
        _id: "58f40badc9e7ce9f7215348a",
        level: 1,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Unarmored Defense"
          },
          {
            name: "Martial Arts"
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
      {
        _id: "58f40badc9e7ce9f7215348b",
        level: 2,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Ki"
          },
          {
            name: "Flurry of Blows"
          },
          {
            name: "Patient Defense"
          },
          {
            name: "Step of the Wind"
          },
          {
            name: "Unarmored Movement 1"
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
      {
        _id: "58f40badc9e7ce9f7215348c",
        level: 3,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Monastic Tradition"
          },
          {
            name: "Deflect Missiles"
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
      {
        _id: "58f40badc9e7ce9f7215348e",
        level: 4,
        ability_score_bonuses: 1,
        prof_bonus: 2,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 1"
          },
          {
            name: "Slow Fall"
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
      {
        _id: "58f40badc9e7ce9f7215348d",
        level: 5,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Extra Attack"
          },
          {
            name: "Stunning Strike"
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
      {
        _id: "58f40badc9e7ce9f72153491",
        level: 6,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Ki Empowered Strikes"
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
      {
        _id: "58f40badc9e7ce9f72153490",
        level: 7,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Evasion"
          },
          {
            name: "Stillness of Mind"
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
      {
        _id: "58f40badc9e7ce9f72153493",
        level: 8,
        ability_score_bonuses: 2,
        prof_bonus: 3,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 2"
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
      {
        _id: "58f40badc9e7ce9f72153494",
        level: 9,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Unarmored Movement 2"
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
      {
        _id: "58f40badc9e7ce9f72153498",
        level: 10,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Purity of Body"
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
      {
        _id: "58f40badc9e7ce9f72153495",
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
      {
        _id: "58f40badc9e7ce9f72153496",
        level: 12,
        ability_score_bonuses: 3,
        prof_bonus: 4,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 3"
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
      {
        _id: "58f40badc9e7ce9f72153497",
        level: 13,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Tongue of the Sun and Moon"
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
      {
        _id: "58f40badc9e7ce9f72153499",
        level: 14,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Diamond Soul"
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
      {
        _id: "58f40badc9e7ce9f7215349a",
        level: 15,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Timeless Body"
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
      {
        _id: "58f40badc9e7ce9f7215349b",
        level: 16,
        ability_score_bonuses: 4,
        prof_bonus: 5,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 4"
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
      {
        _id: "58f40badc9e7ce9f7215349c",
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
      {
        _id: "58f40badc9e7ce9f7215349d",
        level: 18,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Empty Body"
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
      {
        _id: "58f40badc9e7ce9f721534a0",
        level: 19,
        ability_score_bonuses: 5,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Ability Score Improvement 5"
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
      {
        _id: "58f40badc9e7ce9f721534a1",
        level: 20,
        ability_score_bonuses: 5,
        prof_bonus: 6,
        feature_choices: [],
        features: [
          {
            name: "Perfect Self"
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
