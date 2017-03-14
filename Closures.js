function incrementar() {
	var valor = 0;

	return function(){
		return ++valor;		
	}
}

var fn = incrementar();
console.log(fn());

//Função auto executavel
var autoIncrement = (function(){
		var valor = 0;

		return function(){
			return ++valor;
		}
})()

console.log(autoIncrement());