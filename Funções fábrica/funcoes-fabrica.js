var fabricarCarroDaVolks = function(nome, placa){
	return {
		nome: nome,
		placa: placa,
		fabricante:'VW'
	}
}


var gol = fabricarCarroDaVolks('gol', 'GSM-1276');
console.log('Gol', gol);

var saveiro = fabricarCarroDaVolks('Saveiro', 'GSM-1276');
console.log('Saveiro',saveiro);