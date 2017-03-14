var joao = {
	nome: 'joao',
	idade: 25,
	email:'teste@gmail.com',
	endereco:{
		logradouro:'Av Brasil',
		numero: 100,
		complemento: 'Apt 202',
		pais:{
			nome: 'Brasil',
			cidade: 'Rio de Janeiro',
			estado: 'RJ'
		}
	},
	igualA:function(obj){
		return this.email === obj.email;
	},
	cidadesIguais: function(obj){
		return this.endereco.pais.cidade === obj.endereco.pais.cidade;
	}

}

var maria = {
	nome: 'Maria',
	idade: 22,
	email:'teste@gmail.com',
	endereco:{
		logradouro:'Av Pedro 2',
		numero: 598,
		complemento: 'casa',
		pais:{
			nome: 'Brasil',
			cidade: 'Belo Horizonte',
			estado: 'MG'
		}
	},
	igualA:function(obj){
		return this.email === obj.email;
	},
	cidadesIguais: function(obj){
		return this.endereco.pais.cidade === obj.endereco.pais.cidade;
	}		
}

console.log('João e Maria tem o mesmo email?', maria.igualA(joao) ? 'Sim' : 'Não');

console.log('-------------------------------------------------------');

console.log('João e Maria são da mesma?', joao.cidadesIguais(maria) ? 'Sim' : 'Não');
