$(function(){

	var resposta = $.ajax({
			url: 'http://localhost:8080/estados',
			method: 'GET',
			dataType: 'jsonp'
		});

	resposta.done(function(estados){
		estados.forEach(function(estado){
			console.log(estado)
		});
	});

	resposta.fail(function(error){
		console.log('Aconteceu algum erro no servidor', error);
	});
});