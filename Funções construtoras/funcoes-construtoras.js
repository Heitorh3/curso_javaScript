var Carro = function(nome, placa) {
	this.nome = nome;
	this.placa = placa;
	this.fabricante = 'VW';
}

var fox = new Carro('Fox', 'PVX-8412');
console.log('Fox', fox);