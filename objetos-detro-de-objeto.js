var joao = {
	nome: 'joao',
	idade: 25,
	endereco:{
		logradouro:'Av Brasil',
		numero: 100,
		complemento: 'Apt 202',
		cidade: 'Rio de Janeiro',
		estado: 'RJ'
	}	
}

//console.log(joao);

console.log('Cidade que o joão mora:', joao.endereco.cidade);

joao.endereco.numero = 101;

console.log('Número da residencia do joão:', joao.endereco.numero);