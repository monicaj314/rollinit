[
  {
    _id: "592d1ed5c9e7ce9f72157c6a",
    index: 4,
    name: "Druid",
    hit_die: 8,
    proficiency_choices: [
      {
        from: [
          {
            name: "Skill: Animal Handling",
          },
          {
            name: "Skill: Arcana",
          },
          {
            name: "Skill: Insight",
          },
          {
            name: "Skill: Medicine",
          },
          {
            name: "Skill: Nature",
          },
          {
            name: "Skill: Perception",
          },
          {
            name: "Skill: Religion",
          },
          {
            name: "Skill: Survival",
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
        name: "Clubs"
      },
      {
        name: "Daggers"
      },
      {
        name: "Javelins"
      },
      {
        name: "Maces"
      },
      {
        name: "Quarterstaffs"
      },
      {
        name: "Sickles"
      },
      {
        name: "Spears"
      },
      {
        name: "Darts"
      },
      {
        name: "Slings"
      },
      {
        name: "Scimitars"
      },
      {
        name: "Herbalism Kit"
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
      class: "Druid"
    },
    class_levels: {
      class: "Druid"
    },
    subclasses: [
      {
        name: "Land",
      }
    ],
    spellcasting: {
      class: "Druid"
    },
  },

  featuresArray[
    { _id: "druidLevel1",
      level: 1,
      ability_score_bonuses: 0,
      prof_bonus: 2,
      feature_choices: [],
      features: [
        {
          name: "Spellcasting",
          def: [
            "Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will."
          ],
        },
        {
          name: "Druidic",
          def: [
            "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic."
          ],
        }
      ],
      spellcasting: {
        cantrips_known: 2,
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
        wild_shape_max_cr: 0,
        wild_shape_swim: "no",
        wild_shape_fly: "no"
      },
      index: 61,
      class: {
        name: "Druid",
      },
    }, 
    { _id: "druidLevel2",
      level: 2,
      ability_score_bonuses: 0,
      prof_bonus: 2,
      feature_choices: [],
      features: [
        {
          name: "Wild Shape (CR 1/4 or below, no flying or swim speed)",
          def: [
            "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.",
            "Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
            "You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.",
            "While you are transformed, the following rules apply:",
            "• Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
            "• When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
            "• You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.",
            "• You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.",
            "• You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
          ],
        },
        {
          name: "Druid Circle",
          def: [
            "At 2nd level, you choose to identify with a circle of druids: the Circle of the Land or the Circle of the Moon, both detailed at the end of the class description. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
          ],
        }
      ],
      spellcasting: {
        cantrips_known: 2,
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
        wild_shape_max_cr: 0.25,
        wild_shape_swim: "no",
        wild_shape_fly: "no"
      },
      index: 62,
      class: {
        name: "Druid",
      },
    }, 
    { _id: "druidLevel3",
      level: 3,
      ability_score_bonuses: 0,
      prof_bonus: 2,
      feature_choices: [],
      features: [],
      spellcasting: {
        cantrips_known: 2,
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
        wild_shape_max_cr: 0.25,
        wild_shape_swim: "no",
        wild_shape_fly: "no"
      },
      index: 63,
      class: {
        name: "Druid",
      },
    }, 
    { _id: "druidLevel4",
      level: 4,
      ability_score_bonuses: 1,
      prof_bonus: 2,
      feature_choices: [],
      features: [
        {
          name: "Wild Shape (CR 1/2 or below, no flying speed)",
          def: [
            "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.",
            "Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
            "You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.",
            "While you are transformed, the following rules apply:",
            "• Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
            "• When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
            "• You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.",
            "• You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.",
            "• You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
          ],
        },
        {
          name: "Ability Score Improvement 1",
          def: [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
          ],
        }
      ],
      spellcasting: {
        cantrips_known: 3,
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
        wild_shape_max_cr: 0.5,
        wild_shape_swim: "yes",
        wild_shape_fly: "no"
      },
      index: 64,
      class: {
        name: "Druid",
      },
    }, 
    { _id: "druidLevel5",
      level: 5,
      ability_score_bonuses: 1,
      prof_bonus: 3,
      feature_choices: [],
      features: [],
      spellcasting: {
        cantrips_known: 3,
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
        wild_shape_max_cr: 0.5,
        wild_shape_swim: "yes",
        wild_shape_fly: "no"
      },
      index: 65,
      class: {
        name: "Druid",
      },
    }, 
    { _id: "druidLevel6",
      level: 6,
      ability_score_bonuses: 1,
      prof_bonus: 3,
      feature_choices: [],
      features: [],
      spellcasting: {
        cantrips_known: 3,
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
        wild_shape_max_cr: 0.5,
        wild_shape_swim: "yes",
        wild_shape_fly: "no"
      },
      index: 66,
      class: {
        name: "Druid",
      },
    }, 
    { _id: "druidLevel7",
      level: 7,
      ability_score_bonuses: 1,
      prof_bonus: 3,
      feature_choices: [],
      features: [],
      spellcasting: {
        cantrips_known: 3,
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
        wild_shape_max_cr: 1,
        wild_shape_swim: "yes",
        wild_shape_fly: "no"
      },
      index: 67,
      class: {
        name: "Druid",
      },
    }, 
    { _id: "druidLevel8",
      level: 8,
      ability_score_bonuses: 2,
      prof_bonus: 3,
      feature_choices: [],
      features: [
        {
          name: "Wild Shape (CR 1 or below)",
          def: [
            "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.",
            "Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
            "You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.",
            "While you are transformed, the following rules apply:",
            "• Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
            "• When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
            "• You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.",
            "• You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.",
            "• You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
          ],
        },
        {
          name: "Ability Score Improvement 2",
          def: [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
          ],
        }
      ],
      spellcasting: {
        cantrips_known: 3,
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
        wild_shape_max_cr: 1,
        wild_shape_swim: "yes",
        wild_shape_fly: "yes"
      },
      index: 68,
      class: {
        name: "Druid",
      },
    }, 
    { _id: "druidLevel9",
      level: 9,
      ability_score_bonuses: 2,
      prof_bonus: 4,
      feature_choices: [],
      features: [],
      spellcasting: {
        cantrips_known: 3,
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
        wild_shape_max_cr: 1,
        wild_shape_swim: "yes",
        wild_shape_fly: "yes"
      },
      index: 69,
      class: {
        name: "Druid",
      },
    }, 
    { _id: "druidLevel10",
      level: 10,
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
        spell_slots_level_5: 2,
        spell_slots_level_6: 0,
        spell_slots_level_7: 0,
        spell_slots_level_8: 0,
        spell_slots_level_9: 0
      },
      class_specific: {
        wild_shape_max_cr: 1,
        wild_shape_swim: "yes",
        wild_shape_fly: "yes"
      },
      index: 70,
      class: {
        name: "Druid",
      },
    }, 
    { _id: "druidLevel11",
      level: 11,
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
        spell_slots_level_5: 2,
        spell_slots_level_6: 1,
        spell_slots_level_7: 0,
        spell_slots_level_8: 0,
        spell_slots_level_9: 0
      },
      class_specific: {
        wild_shape_max_cr: 1,
        wild_shape_swim: "yes",
        wild_shape_fly: "yes"
      },
      index: 71,
      class: {
        name: "Druid",
      },
    }, 
    { _id: "druidLevel12",
      level: 12,
      ability_score_bonuses: 3,
      prof_bonus: 4,
      feature_choices: [],
      features: [
        {
          name: "Ability Score Improvement 3",
          def: [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
          ],
        }
      ],
      spellcasting: {
        cantrips_known: 4,
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
        wild_shape_max_cr: 1,
        wild_shape_swim: "yes",
        wild_shape_fly: "yes"
      },
      index: 72,
      class: {
        name: "Druid",
      },
    }, 
    { _id: "druidLevel13",
      level: 13,
      ability_score_bonuses: 3,
      prof_bonus: 5,
      feature_choices: [],
      features: [],
      spellcasting: {
        cantrips_known: 4,
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
        wild_shape_max_cr: 1,
        wild_shape_swim: "yes",
        wild_shape_fly: "yes"
      },
      index: 73,
      class: {
        name: "Druid",
      },
    }, 
    { _id: "druidLevel14",
      level: 14,
      ability_score_bonuses: 3,
      prof_bonus: 5,
      feature_choices: [],
      features: [],
      spellcasting: {
        cantrips_known: 4,
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
        wild_shape_max_cr: 1,
        wild_shape_swim: "yes",
        wild_shape_fly: "yes"
      },
      index: 74,
      class: {
        name: "Druid",
      },
    }, 
    { _id: "druidLevel15",
      level: 15,
      ability_score_bonuses: 3,
      prof_bonus: 5,
      feature_choices: [],
      features: [],
      spellcasting: {
        cantrips_known: 4,
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
        wild_shape_max_cr: 1,
        wild_shape_swim: "yes",
        wild_shape_fly: "yes"
      },
      index: 75,
      class: {
        name: "Druid",
      },
    }, 
    { _id: "druidLevel16",
      level: 16,
      ability_score_bonuses: 4,
      prof_bonus: 5,
      feature_choices: [],
      features: [
        {
          name: "Ability Score Improvement 4",
          def: [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
          ],
        }
      ],
      spellcasting: {
        cantrips_known: 4,
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
        wild_shape_max_cr: 1,
        wild_shape_swim: "yes",
        wild_shape_fly: "yes"
      },
      index: 76,
      class: {
        name: "Druid",
      },
    }, 
    { _id: "druidLevel17",
      level: 17,
      ability_score_bonuses: 4,
      prof_bonus: 6,
      feature_choices: [],
      features: [],
      spellcasting: {
        cantrips_known: 4,
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
        wild_shape_max_cr: 1,
        wild_shape_swim: "yes",
        wild_shape_fly: "yes"
      },
      index: 77,
      class: {
        name: "Druid",
      },
    }, 
    { _id: "druidLevel18",
      level: 18,
      ability_score_bonuses: 4,
      prof_bonus: 6,
      feature_choices: [],
      features: [
        {
          name: "Timeless Body",
          def: [
            "Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year."
          ],
        },
        {
          name: "Beast Spells",
          def: [
            "Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components."
          ],
        }
      ],
      spellcasting: {
        cantrips_known: 4,
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
        wild_shape_max_cr: 1,
        wild_shape_swim: "yes",
        wild_shape_fly: "yes"
      },
      index: 78,
      class: {
        name: "Druid",
      },
    }, 
    { _id: "druidLevel19",
      level: 19,
      ability_score_bonuses: 5,
      prof_bonus: 6,
      feature_choices: [],
      features: [
        {
          name: "Ability Score Improvement 5",
          def: [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
          ],
        }
      ],
      spellcasting: {
        cantrips_known: 4,
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
        wild_shape_max_cr: 1,
        wild_shape_swim: "yes",
        wild_shape_fly: "yes"
      },
      index: 79,
      class: {
        name: "Druid",
      },
    }, 
    { _id: "druidLevel20",
      level: 20,
      ability_score_bonuses: 5,
      prof_bonus: 6,
      feature_choices: [],
      features: [
        {
          name: "Archdruid",
          def: [
          "At 20th level, you can use your Wild Shape an unlimited number of times.",
          "Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape."
        ],
        }
      ],
      spellcasting: {
        cantrips_known: 4,
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
        wild_shape_max_cr: 1,
        wild_shape_swim: "yes",
        wild_shape_fly: "yes"
      },
      index: 80,
      class: {
        name: "Druid",
      },
    }
  ]
];
