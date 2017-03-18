function Carro(nome, placa) {
	this.nome = nome;
	this.placa = placa;
	// this.fabricante = 'VW';
}

Carro.prototype.fabricante = 'VW';
Carro.prototype.ligar = function(carro) {
	console.log('Ligando o',carro.nome);
}

var fox = new Carro('Fox', 'AAA-1111');
console.log('fox', fox);

var gol = new Carro('Gol', 'AAA-2222');
console.log('gol', gol);

var celta = new Carro('Celta', 'AAA-1111');
console.log('celta sem fabricante',  celta);
celta.fabricante = 'GM';

console.log('celta com fabricante',  celta);

console.log('fox.fabricante', fox.fabricante);
console.log('gol.fabricante', gol.fabricante);
console.log('celta.fabricante', celta.fabricante);

fox.ligar(celta);