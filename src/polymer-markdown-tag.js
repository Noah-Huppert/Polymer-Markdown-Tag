var marky = require("marky-markdown");

var options = {
	src: "",
	update: function(){
		if(this.src == undefined){
			throw "<mark-down /> cannot have undefined \"src\" attribute";
		}

		if(this.innerHTML !== undefined){
			this.innerHTML = marky(this.src).html();
		}
	},
	ready: function(){
		this.update();
	},
	srcChanged: function(){
		this.update();
	}
};

Polymer("mark-down", options);