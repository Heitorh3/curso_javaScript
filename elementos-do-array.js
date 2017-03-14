var acessorios = {
	som: 'Pioneer',
	banco:'Couro'
}

var fabricante = {
	nome:'VW'
}

var status = function(status) {
	console.log(status,'o carro!!');
}

var odometro = function(){
	console.log('17km...');
}

var fox = ['Fox', acessorios, status, fabricante,odometro];


console.log(fox);

console.log(fox[1].banco);

fox[2]('Ligando');

fox[4]();