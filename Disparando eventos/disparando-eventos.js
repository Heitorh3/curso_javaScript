$(function(){
	var atividade = $('#atividade');
	var listaAtividades = $('#lista-atividades');

	atividade.on('keyup', function(evento){
		var keyCode = evento.keyCode;

		if(keyCode === 13){
			//Dispara um evento
			atividade.trigger('enter', atividade.val());
			atividade.val('');
		}
	});

	atividade.on('enter', function(enter, texto){
			listaAtividades.prepend('<li>' + texto + '</li>');
		});

});