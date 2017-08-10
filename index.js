const app = "I don't do much."

function Sandwich(bread, ingredients, name){
	this.bread = bread;
	this.name = name;
	this.ingredients = ingredients
	this.serve = function(){
		console.log('this.name')
	}
}

var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly");

serve.call(gc)
serve.apply([gc])