var rules = {

	attributes : {
		str : "strength",
		dex : "dexterity",
		con : "constitution",
		int : "intelligence",
		wis : "wisdom",
		cha : "charisma"
	},
	modifierLevels : {
		'-4' : { min: 1, max : 1},
		'-3' : { min: 2, max : 3},
		'-2' : { min: 4, max : 5},
		'-1' : { min: 6, max : 8},
		'0' : { min: 9, max : 12},
		'1' : { min: 13, max : 15},
		'2' : { min: 16, max : 17},
		'3' : { min: 18, max : 20},
	}
};