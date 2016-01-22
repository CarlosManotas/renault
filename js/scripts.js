$(function(){
	var $figure = $("figure.amarillo");
	//retornar todos los figure
	var $playerVideo = $("#player-video");
	var hijos = $playerVideo.find("figure");
	var deportesArray = [
	[['figure#1','figure#3'],'youtube1'],
	[['figure#5','figure#7'],'youtube2'],
	[['figure#1','figure#9'],'youtube3'],
	[['figure#12','figure#5'],'youtube4'],
	[['figure#10','figure#13'],'youtube5'],
	[['figure#2','figure#6'],'youtube6']
	];
	var objetoDeporte = {};

	/*for(var tete in hijos){
		var tamano = $(hijos[tete]).css("background-image");
		console.log(tamano);
	}*/
	/*function mostrar_propiedades(objeto, nombreObjeto) {
	   var resultado = "";
	   for (var i in objeto) {
	      resultado += nombreObjeto + "." + i + " = " + objeto[i] + "\n";
	   }
	   console.log(resultado) ;
	}
	mostrar_propiedades(hijos , "manotas");*/
	var array = [];
	for(var i=1;i < hijos.length; i++){
		array.push(hijos[i]);
		imagenes(hijos[i],i);
		
	}
	console.log(array);
	function imagenes (objeto , number) {
		$(objeto).css('background-image','url(../img/deporte' + number +'.jpg)');
	}
	function efectoAlpha (objeto){
		$(objeto).addClass('opacity');
	}
	function noAlpha (objeto){
		$(objeto).removeClass('opacity');
	}
 	function getArrayRandom (array){
		var arrayRespuesta = [];
		array.sort(function(){ return 0.5 - Math.random()});
		arrayRespuesta.push(array[0],array[1]);
		//arrayRespuesta.push();
		return arrayRespuesta;
	}
	function stopi(interval){
		window.clearInterval(interval);
	}
	var interval ;

	function getDeporte(){
		
		var res = deportesArray[Math.floor(Math.random() * deportesArray.length)];

			return res;
	}

	$figure.on('click',function(){
		interval = setInterval(function(){ efectoAlpha(array);
			noAlpha(getArrayRandom(array));
		}, 100);
		setTimeout(function(){

			stopi(interval);
			efectoAlpha(array);
			var resultadosDeportes =getDeporte();
			
			var deportes = resultadosDeportes[0];
			var youtubeLink = resultadosDeportes[1];
			

			//console.log(deportes+'---'+youtubeLink);
			for (var i = 0; i < deportes.length; i++) {
				noAlpha(deportes[i]);
				console.log(deportes[i]);
			};
		},2500);
	});

});
