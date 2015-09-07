
function Animal(barulho){
  this.barulho = barulho;
};

var animalPrototipo = {fazerBarulho :function (){
  return this.barulho;
}};

function Manada(Animal){
		var animais = [];
    };
	
var manadaPrototipo = {addAnimal : function(Animal){
	animais.push(Animal);
}};

function manadaVirgula(animais){
	var barulheira = '';
}
var manadaVirgulaPrototipo = {mostrarBarulheira: function(animais){
		for (i = 0; i<=animais.lenght; i++){
		if (i===animais.lenght){
		barulheira+=bicho.fazerBarulho;
		}
		else{
		barulheira+=bicho.fazerBarulho+', ';
		}
	}
}}

function manadaAsterisco(animais){
	var barulheira = '';
}
var manadaAsteriscoPrototipo = {mostrarBarulheira: function(animais){
		for (i = 0; i<=animais.lenght; i++){
		if (i===animais.lenght){
		barulheira+=bicho.fazerBarulho;
		}
		else{
		barulheira+=bicho.fazerBarulho+'*';
		}
	}
}}

Animal.prototype = animalPrototipo;
Manada.prototype = manadaPrototipo;
manadaVirgulaPrototipo.prototype = manadaPrototipo;
manadaVirgula.prototype = manadaVirgulaPrototipo;
manadaAsteriscoPrototipo.prototype = manadaPrototipo;
manadaAsterisco.prototype = manadaAsteriscoPrototipo;




var Cachorro = new Animal('Au au');
var Gato = new Animal('Miau');

console.log(manadaVirgulaPrototipo.mostrarBarulheira());