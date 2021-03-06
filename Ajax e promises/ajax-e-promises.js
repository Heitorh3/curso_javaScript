$(function(){

	var resposta = $.ajax({
			url: 'http://localhost:8080/estados',
			method: 'GET',
			dataType: 'jsonp'
		});

	resposta.done(function(estados){
		var comboEstado = $('#combo-estado');

		comboEstado.html('<option>Selecione o estado</option>');
		estados.forEach(function(estado){
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			comboEstado.append(optionEstado);
		});
	});

	resposta.fail(function(error){
		console.log('Aconteceu algum erro no servidor', error);
	});
});