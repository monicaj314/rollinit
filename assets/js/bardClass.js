[
  {
    _id: "barbarianClass",
	name: "Bard",
    hit_die: 8,
	skillChoices: [
		{
			from: [
				{
					name: "Skill: Acrobatics"
				},
				{
					name: "Skill: Animal Handling"
				},
				{
					name: "Skill: Arcana"
				},
				{
					name: "Skill: Athletics"
				},
				{
					name: "Skill: Deception"
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
					name: "Skill: Investigation"
				},
				{
					name: "Skill: Medicine"
				},
				{
					name: "Skill: Nature"
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
					name: "Skill: Religion"
				},
				{
					name: "Skill: Sleight of Hand"
				},
				{
					name: "Skill: Stealth"
				},
				{
					name: "Skill: Survival"
				}
			],
			"type": "skill",
			"choose": 3
		    }
        ],
        instrumentsChoices: [
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
			type: "instrument",
			choose: 3
		}
	],
	proficiencies: [
		{
			url: "http://www.dnd5eapi.co/api/proficiencies/1",
			name: "Light armor"
		},
		{
			url: "http://www.dnd5eapi.co/api/proficiencies/19",
			name: "Simple weapons"
		},
		{
			url: "http://www.dnd5eapi.co/api/proficiencies/42",
			name: "Longswords"
		},
		{
			url: "http://www.dnd5eapi.co/api/proficiencies/46",
			name: "Rapiers"
		},
		{
			url: "http://www.dnd5eapi.co/api/proficiencies/48",
			name: "Shortswords"
		},
		{
			url: "http://www.dnd5eapi.co/api/proficiencies/54",
			name: "Crossbows, hand"
		}
	],
	saving_throws: [
		{
			url: "http://www.dnd5eapi.co/api/ability-scores/2",
			name: "DEX"
		},
		{
			url: "http://www.dnd5eapi.co/api/ability-scores/6",
			name: "CHA"
		}
	],
	starting_equipment: {
		url: "http://www.dnd5eapi.co/api/startingequipment/2",
		class: "Bard"
	},
	class_levels: {
		url: "http://www.dnd5eapi.co/api/classes/Bard/levels",
		class: "Bard"
	},
	subclasses: [
		{
			name: "Lore",
			url: "http://www.dnd5eapi.co/api/subclasses/2"
		}
	],
	spellcasting: {
		url: "http://www.dnd5eapi.co/api/spellcasting/1",
		class: "Bard"
	},
	url: "http://www.dnd5eapi.co/api/classes/2",
    
    features: [
        {_id: "bardLevel1",
            level: 1,
            ability_score_bonuses: 0,
            prof_bonus: 2,
            feature_choices: [],
            features: [
            {
                url: "http://www.rollinit.com/charcreator/features/25",
                name: "spellCasting",
                desc: [
                "You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations."
                ]
            },
            {
                url: "http://www.rollinit.com/charcreator/features/26",
                name: "Bardic Inspiration (d6)",
                desc: [
                "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.",
                "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. ",
                "Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
                ]
            },
            {
                url: "http://www.rollinit.com/charcreator/features/70",
                name: "Superior Inspiration"
            }
            ],
            spellCasting: {
            cantrips_known: 2,
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
            bardic_inspiration_die: 6,
            song_of_rest_die: 0,
            magical_secrets_max_5: 0,
            magical_secrets_max_7: 0,
            magical_secrets_max_9: 0
            },
            index: 21,
            class: {
            name: "Bard",
            url: "http://www.rollinit.com/charcreator/classes/bard"
            },
            url: "http://www.rollinit.com/charcreator/classes/bard/level/1"
        },
        { _id: "bardLevel2",
            level: 2,
            ability_score_bonuses: 0,
            prof_bonus: 2,
            feature_choices: [],
            features: [
            {
                url: "http://www.rollinit.com/charcreator/features/27",
                name: "Jack of All Trades",
                desc: [
                "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that does not already include your proficiency bonus."
                ]
            },
            {
                url: "http://www.rollinit.com/charcreator/features/28",
                name: "Song of Rest (d6)",
                desc: [
                "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. ",
                "The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
                ]
            }
            ],
            spellCasting: {
            cantrips_known: 2,
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
            bardic_inspiration_die: 6,
            song_of_rest_die: 6,
            magical_secrets_max_5: 0,
            magical_secrets_max_7: 0,
            magical_secrets_max_9: 0
            },
            index: 22,
            class: {
            name: "Bard",
            url: "http://www.rollinit.com/charcreator/classes/bard"
            },
            url: "http://www.rollinit.com/charcreator/classes/bard/level/2"
        },
        { _id: "bardLevel3",
            level: 3,
            ability_score_bonuses: 0,
            prof_bonus: 2,
            feature_choices: [
            {
                url: "http://www.rollinit.com/charcreator/features/32",
                name: "Choose: Expertise 1",
                desc: [
                "When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice."
                ]
            }
            ],
            features: [
            {
                url: "http://www.rollinit.com/charcreator/features/29",
                name: "Bard College",
                desc: [
                "At 3rd level, you delve into the advanced techniques of a bard college of your choice: the College of Lore or the College of Valor, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th and 14th level."
                ]
            }
            ],

            spellCasting: {
            cantrips_known: 2,
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
            bardic_inspiration_die: 6,
            song_of_rest_die: 6,
            magical_secrets_max_5: 0,
            magical_secrets_max_7: 0,
            magical_secrets_max_9: 0
            },
            index: 23,
            class: {
            name: "Bard",
            url: "http://www.rollinit.com/charcreator/classes/bard"
            },
            url: "http://www.rollinit.com/charcreator/classes/bard/level/3"
        },
        { _id: "bardLevel4",
            level: 4,
            ability_score_bonuses: 1,
            prof_bonus: 2,
            feature_choices: [],
            features: [
            {
                url: "http://www.rollinit.com/charcreator/features/51",
                name: "Ability Score Improvement 1",
                desc: [
                "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
                ]
            }
            ],
            spellCasting: {
            cantrips_known: 3,
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
            bardic_inspiration_die: 6,
            song_of_rest_die: 6,
            magical_secrets_max_5: 0,
            magical_secrets_max_7: 0,
            magical_secrets_max_9: 0
            },
            index: 24,
            class: {
            name: "Bard",
            url: "http://www.rollinit.com/charcreator/classes/bard"
            },
            url: "http://www.rollinit.com/charcreator/classes/bard/level/4"
        },
        { _id: "bardLevel5",
            level: 5,
            ability_score_bonuses: 1,
            prof_bonus: 3,
            feature_choices: [],
            features: [
            {
                url: "http://www.rollinit.com/charcreator/features/52",
                name: "Bardic Inspiration (d8)",
                desc: [
                "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.",
                "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. ",
                "Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
                ]
            },
            {
                url: "http://www.rollinit.com/charcreator/features/53",
                name: "Font of Inspiration",
                desc: [
                "Beginning when you reach 5th level, you regain all of your expended uses o f Bardic Inspiration when you finish a short or long rest."
                ]
            }
            ],
            spellCasting: {
            cantrips_known: 3,
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
            bardic_inspiration_die: 8,
            song_of_rest_die: 6,
            magical_secrets_max_5: 0,
            magical_secrets_max_7: 0,
            magical_secrets_max_9: 0
            },
            index: 25,
            class: {
            name: "Bard",
            url: "http://www.rollinit.com/charcreator/classes/bard"
            },
            url: "http://www.rollinit.com/charcreator/classes/bard/level/5"
        },
        { _id: "bardLevel6",
            level: 6,
            ability_score_bonuses: 1,
            prof_bonus: 3,
            feature_choices: [],
            features: [{
                // url: "http://www.rollinit.com/charcreator/features/52",
                name: "Countercharm",
                desc: [
                "At 6th level, you gain the ability to use musical notes or words o f power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end o f your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required)."
                ]
            },
            {
                // url: "http://www.rollinit.com/charcreator/features/53",
                name: "Bard College",
                desc: [
                "At 3rd level, you delve into the advanced techniques of a bard college of your choice: the College of Lore or the College of Valor, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th and 14th level."
                ]
            }],
            spellCasting: {
            cantrips_known: 3,
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
            bardic_inspiration_die: 8,
            song_of_rest_die: 6,
            magical_secrets_max_5: 0,
            magical_secrets_max_7: 0,
            magical_secrets_max_9: 0
            },
            index: 26,
            class: {
            name: "Bard",
            url: "http://www.rollinit.com/charcreator/classes/bard"
            },
            url: "http://www.rollinit.com/charcreator/classes/bard/level/6"
        },
        { _id: "bardLevel7",
            level: 7,
            ability_score_bonuses: 1,
            prof_bonus: 3,
            feature_choices: [],
            features: [],
            spellCasting: {
            cantrips_known: 3,
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
            bardic_inspiration_die: 8,
            song_of_rest_die: 6,
            magical_secrets_max_5: 0,
            magical_secrets_max_7: 0,
            magical_secrets_max_9: 0
            },
            index: 27,
            class: {
            name: "Bard",
            url: "http://www.rollinit.com/charcreator/classes/bard"
            },
            url: "http://www.rollinit.com/charcreator/classes/bard/level/7"
        },
        { _id: "bardLevel8",
            level: 8,
            ability_score_bonuses: 2,
            prof_bonus: 3,
            feature_choices: [],
            features: [
            {
                url: "http://www.rollinit.com/charcreator/features/56",
                name: "Ability Score Improvement 2"
                desc: [
                "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
                ]
            }
            ],
            spellCasting: {
            cantrips_known: 3,
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
            bardic_inspiration_die: 8,
            song_of_rest_die: 6,
            magical_secrets_max_5: 0,
            magical_secrets_max_7: 0,
            magical_secrets_max_9: 0
            },
            index: 28,
            class: {
            name: "Bard",
            url: "http://www.rollinit.com/charcreator/classes/bard"
            },
            url: "http://www.rollinit.com/charcreator/classes/bard/level/8"
        },
        { _id: "bardLevel9",
            level: 9,
            ability_score_bonuses: 2,
            prof_bonus: 4,
            feature_choices: [],
            features: [
            {
                url: "http://www.rollinit.com/charcreator/features/57",
                name: "Song of Rest (d8)"
                desc: [
                "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest, each of those creatures regains an extra 1d6 hit points."
                "The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d 10 at 13th level, and to 1d 12 at 17th level."
                ]
            }
            ],
            spellCasting: {
            cantrips_known: 3,
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
            bardic_inspiration_die: 8,
            song_of_rest_die: 8,
            magical_secrets_max_5: 0,
            magical_secrets_max_7: 0,
            magical_secrets_max_9: 0
            },
            index: 29,
            class: {
            name: "Bard",
            url: "http://www.rollinit.com/charcreator/classes/bard"
            },
            url: "http://www.rollinit.com/charcreator/classes/bard/level/9"
        },
        { _id: "bardLevel10",
            level: 10,
            ability_score_bonuses: 2,
            prof_bonus: 4,
            feature_choices: [
            {
                url: "http://www.rollinit.com/charcreator/features/59",
                name: "Choose: Expertise 2"
            }
            ],
            features: [
            {
                url: "http://www.rollinit.com/charcreator/features/58",
                name: "Bardic Inspiration (d10)"
                desc: [
                "Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d10 at 10th level."
                ]
            },
            {
                url: "http://www.rollinit.com/charcreator/features/59",
                name: "Expertise",
                desc: [
                "At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either o f the chosen proficiencies.",
                "At 10th level, you can choose another two skill proficiencies to gain this benefit."
                ]
            },
            {
                url: "http://www.rollinit.com/charcreator/features/60",
                name: "Magical Secrets 1"
                desc: [
                "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.",
                "The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.",
                "You learn two additional spells from any class at 14th level and again at 18th level."
                ]
            }
            ],
            spellCasting: {
            cantrips_known: 4,
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
            bardic_inspiration_die: 10,
            song_of_rest_die: 8,
            magical_secrets_max_5: 2,
            magical_secrets_max_7: 0,
            magical_secrets_max_9: 0
            },
            index: 30,
            class: {
            name: "Bard",
            url: "http://www.rollinit.com/charcreator/classes/bard"
            },
            url: "http://www.rollinit.com/charcreator/classes/bard/level/10"
        },
        { _id: "bardLevel11",
            level: 11,
            ability_score_bonuses: 2,
            prof_bonus: 4,
            feature_choices: [],
            features: [],
            spellCasting: {
            cantrips_known: 4,
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
            bardic_inspiration_die: 10,
            song_of_rest_die: 8,
            magical_secrets_max_5: 2,
            magical_secrets_max_7: 0,
            magical_secrets_max_9: 0
            },
            index: 31,
            class: {
            name: "Bard",
            url: "http://www.rollinit.com/charcreator/classes/bard"
            },
            url: "http://www.rollinit.com/charcreator/classes/bard/level/11"
        },
        { _id: "bardLevel12",
            level: 12,
            ability_score_bonuses: 3,
            prof_bonus: 4,
            feature_choices: [],
            features: [
            {
                url: "http://www.rollinit.com/charcreator/features/61",
                name: "Ability Score Improvement 3",
                desc: [
                "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores o f your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
                ]
            }
            ],
            spellCasting: {
            cantrips_known: 4,
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
            bardic_inspiration_die: 10,
            song_of_rest_die: 8,
            magical_secrets_max_5: 2,
            magical_secrets_max_7: 0,
            magical_secrets_max_9: 0
            },
            index: 32,
            class: {
            name: "Bard",
            url: "http://www.rollinit.com/charcreator/classes/bard"
            },
            url: "http://www.rollinit.com/charcreator/classes/bard/level/12"
        },
        { _id: "bardLevel13",
            level: 13,
            ability_score_bonuses: 3,
            prof_bonus: 5,
            feature_choices: [],
            features: [
            {
                url: "http://www.rollinit.com/charcreator/features/62",
                name: "Song of Rest (d10)",
                desc: [
                "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. ",
                "The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
                ]
            }
            ],
            spellCasting: {
            cantrips_known: 4,
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
            bardic_inspiration_die: 10,
            song_of_rest_die: 10,
            magical_secrets_max_5: 2,
            magical_secrets_max_7: 0,
            magical_secrets_max_9: 0
            },
            index: 33,
            class: {
            name: "Bard",
            url: "http://www.rollinit.com/charcreator/classes/bard"
            },
            url: "http://www.rollinit.com/charcreator/classes/bard/level/13"
        },
        { _id: "bardLevel14",
            level: 14,
            ability_score_bonuses: 3,
            prof_bonus: 5,
            feature_choices: [],
            features: [
            {
                url: "http://www.rollinit.com/charcreator/features/63",
                name: "Magical Secrets 2",
                desc: [
                "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.",
                "The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.",
                "You learn two additional spells from any class at 14th level and again at 18th level."
                ]
            },
            {
                url: "http://www.rollinit.com/charcreator/features/29",
                name: "Bard College",
                desc: [
                "At 3rd level, you delve into the advanced techniques of a bard college of your choice: the College of Lore or the College of Valor, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th and 14th level."
                ]
            }
            ],
            spellCasting: {
            cantrips_known: 4,
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
            bardic_inspiration_die: 10,
            song_of_rest_die: 10,
            magical_secrets_max_5: 2,
            magical_secrets_max_7: 2,
            magical_secrets_max_9: 0
            },
            index: 34,
            class: {
            name: "Bard",
            url: "http://www.rollinit.com/charcreator/classes/bard"
            },
            url: "http://www.rollinit.com/charcreator/classes/bard/level/14"
        },
        { _id: "bardLevel15",
            level: 15,
            ability_score_bonuses: 3,
            prof_bonus: 5,
            feature_choices: [],
            features: [
            {
                url: "http://www.rollinit.com/charcreator/features/65",
                name: "Bardic Inspiration (d12)",
                desc: [
                "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.",
                "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. ",
                "Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
                ]
            }
            ],
            spellCasting: {
            cantrips_known: 4,
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
            bardic_inspiration_die: 12,
            song_of_rest_die: 10,
            magical_secrets_max_5: 2,
            magical_secrets_max_7: 2,
            magical_secrets_max_9: 0
            },
            index: 35,
            class: {
            name: "Bard",
            url: "http://www.rollinit.com/charcreator/classes/bard"
            },
            url: "http://www.rollinit.com/charcreator/classes/bard/level/15"
        },
        { _id: "bardLevel16",
            level: 16,
            ability_score_bonuses: 4,
            prof_bonus: 5,
            feature_choices: [],
            features: [
            {
                url: "http://www.rollinit.com/charcreator/features/66",
                name: "Ability Score Improvement 4",
                desc: [
                "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores o f your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
                ]
            }
            ],
            spellCasting: {
            cantrips_known: 4,
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
            bardic_inspiration_die: 12,
            song_of_rest_die: 10,
            magical_secrets_max_5: 2,
            magical_secrets_max_7: 2,
            magical_secrets_max_9: 0
            },
            index: 36,
            class: {
            name: "Bard",
            url: "http://www.rollinit.com/charcreator/classes/bard"
            },
            url: "http://www.rollinit.com/charcreator/classes/bard/level/16"
        },
        { _id: "bardLevel17",
            level: 17,
            ability_score_bonuses: 4,
            prof_bonus: 6,
            feature_choices: [],
            features: [
            {
                url: "http://www.rollinit.com/charcreator/features/67",
                name: "Song of Rest (d12)",
                desc: [
                "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. ",
                "The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
                ]
            }
            ],
            spellCasting: {
            cantrips_known: 4,
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
            bardic_inspiration_die: 12,
            song_of_rest_die: 12,
            magical_secrets_max_5: 2,
            magical_secrets_max_7: 2,
            magical_secrets_max_9: 0
            },
            index: 37,
            class: {
            name: "Bard",
            url: "http://www.rollinit.com/charcreator/classes/bard"
            },
            url: "http://www.rollinit.com/charcreator/classes/bard/level/17"
        },
        { _id: "bardLevel18",
            level: 18,
            ability_score_bonuses: 4,
            prof_bonus: 6,
            feature_choices: [],
            features: [
            {
                url: "http://www.rollinit.com/charcreator/features/68",
                name: "Magical Secrets 3",
                desc: [
                "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.",
                "The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.",
                "You learn two additional spells from any class at 14th level and again at 18th level."
                ]
            }
            ],
            spellCasting: {
            cantrips_known: 4,
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
            bardic_inspiration_die: 12,
            song_of_rest_die: 12,
            magical_secrets_max_5: 2,
            magical_secrets_max_7: 2,
            magical_secrets_max_9: 2
            },
            index: 38,
            class: {
            name: "Bard",
            url: "http://www.rollinit.com/charcreator/classes/bard"
            },
            url: "http://www.rollinit.com/charcreator/classes/bard/level/18"
        },
        { _id: "bardLevel19",
            level: 19,
            ability_score_bonuses: 5,
            prof_bonus: 6,
            feature_choices: [],
            features: [
            {
                url: "http://www.rollinit.com/charcreator/features/69",
                name: "Ability Score Improvement 5",
                desc: [
                "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
                ]
            }
            ],
            spellCasting: {
            cantrips_known: 4,
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
            bardic_inspiration_die: 12,
            song_of_rest_die: 12,
            magical_secrets_max_5: 2,
            magical_secrets_max_7: 2,
            magical_secrets_max_9: 2
            },
            index: 39,
            class: {
            name: "Bard",
            url: "http://www.rollinit.com/charcreator/classes/bard"
            },
            url: "http://www.rollinit.com/charcreator/classes/bard/level/19"
        },
        { _id: "bardLevel20",
            level: 20,
            ability_score_bonuses: 5,
            prof_bonus: 6,
            feature_choices: [],
            features: [
            {
                url: "http://www.rollinit.com/charcreator/features/70",
                name: "Superior Inspiration",
                desc: [
                "At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use."
                ]
            }
            ],
            spellCasting: {
            cantrips_known: 4,
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
            bardic_inspiration_die: 12,
            song_of_rest_die: 12,
            magical_secrets_max_5: 2,
            magical_secrets_max_7: 2,
            magical_secrets_max_9: 2
            },
            index: 40,
            class: {
            name: "Bard",
            url: "http://www.rollinit.com/charcreator/classes/bard"
            },
            url: "http://www.rollinit.com/charcreator/classes/bard/level/20"
        }
        ];
    }
];