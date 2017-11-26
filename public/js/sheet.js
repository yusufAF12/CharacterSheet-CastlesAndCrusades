var app = new Vue({
	el : '#sheet',
	data : character,
	computed : {

	}
});


var character = {
	general : {
		name : "",
        title : "",
        race : "",
        alignment : "",
        deity : "",
	},
	physical : {

	},
	attributes : {
		str : 0,
		dex : 0,
		con : 0,
		int : 0,
		wis : 0,
		cha : 0
	},
	level : {

	},
	abilities : {

	}

}

var computeModifier = function() {
	
}