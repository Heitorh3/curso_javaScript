var joao = {
	nome: 'joao',
	idade: 25,
	endereco:{
		logradouro:'Av Brasil',
		numero: 100,
		complemento: 'Apt 202',
		pais:{
			nome: 'Brasil',
			cidade: 'Rio de Janeiro',
			estado: 'RJ'
		}
	}	
}

for (var prop in joao) {
	console.log(prop, '=>', joao[prop]);
}