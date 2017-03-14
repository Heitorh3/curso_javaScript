var fox = {
	cor: 'Prata',
	modelo:'Fox',
	fabricnate: 'VW'
}

console.log('Fox', fox);
console.log(typeof fox);

console.log('Cor do fox: ',fox.cor);

// pintando o fox
fox.cor = 'Branco';
console.log('Fox depois de pintado', fox);
console.log('Modelo:', fox['modelo']);

//adicionando uma propriedade no objeto
fox['ano'] = 2017;
//ou
fox.peso = 1100;
console.log('Ano do fox: ',fox.ano);

// adicionando uma função
fox.ligar = function() { 
	console.log('Ligando o carro!'); 
};

console.log(fox);
fox.ligar();

var celta = {
	cor: 'branco',
	modelo: 'celta',
	fabricante: 'GM',
	ligar: function() {
		console.log('Ligando o carro');
	}
};

console.log('celta', celta);