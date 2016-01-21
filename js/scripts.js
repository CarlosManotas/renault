$(function(){
	var $figure = $("figure");
	//retornar todos los figure
	var $playerVideo = $("#player-video");
	var hijos = $playerVideo.find("figure");

	/*for(var tete in hijos){
		var tamano = $(hijos[tete]).css("background-image");
		console.log(tamano);
	}*/
	function mostrar_propiedades(objeto, nombreObjeto) {
	   var resultado = "";
	   for (var i in objeto) {
	      resultado += nombreObjeto + "." + i + " = " + objeto[i] + "\n";
	   }
	   console.log(resultado) ;
	}
	mostrar_propiedades(hijos , "manotas");
});
