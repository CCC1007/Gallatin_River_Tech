var database = [];
    function submitItem(){
    var w = document.forms["Item-Entry"]["width"].value;
    var h = document.forms["Item-Entry"]["height"].value;
    var d = document.forms["Item-Entry"]["depth"].value;
    var m = document.forms["Item-Entry"]["mass"].value;
    var id = document.forms["Item-Entry"]["Identifier"].value;
	var c = document.forms["Item-Entry"]["count"].value;
	var v = w*h*d;
    var out = {"Width":w,"Height":h,"Depth":d,"Mass":m,"ID":id,"Count":c,"Volume":v};
    console.log(out);
	database.push(out);
	document.getElementById("item-count").innerHTML = database.length;
    return false;
    }
	function finalizeTrailer(){
		var valid = validate();
		return false;//while writing code I am returning false for now.
		sortItems(database);
		var pallets = palletize(database);
		var trailers = load(pallets);
	}
	function validate(){
	    //if(database[0]){
	        for(var i = 0; i < database.length; i++){
	            if(!database[i].Height||!database[i].Width||!database[i].Depth||!database[i].ID||!database[i].Mass||!database[i].Count||!database[i].Volume){
	                console.log(database[i]);
	                return false;
	            }
	        return true;
	        }
	   // }return false;
	}
	function pallet(){
		var items = [];
		var maxWidth = 48;
		var maxHeight = 50;
		var maxDepth = 48;
		var mass;
	}
	function trailer(){
		var pallets = [];
		var maxWidth = 99;
		var maxHeight = 110;
		var maxDepth = 630;
		var tareut;
	}
