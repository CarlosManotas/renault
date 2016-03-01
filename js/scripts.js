$(function(){
	var $figure = $("figure.amarillo");
	var $timer  = $("#time");
	var $video = $(".video-youtube");
	//retornar todos los figure
	var $playerVideo = $("#player-video");
	var hijos = $playerVideo.find("figure");
	var deportesArray = [
	[['figure#1','figure#3'],'oeAjjrCgINk'],
	[['figure#5','figure#7'],'HJEmdWaYSLU'],
	[['figure#1','figure#9'],'oeAjjrCgINk'],
	[['figure#12','figure#5'],'HJEmdWaYSLU'],
	[['figure#10','figure#13'],'HJEmdWaYSLU'],
	[['figure#2','figure#6'],'oeAjjrCgINk']
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
		$(objeto).css('background-image','url(img/deporte' + number +'.jpg)');
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
			
			var fiveMinutes = 60 / 20,
	        display = document.querySelector('#time');
	        display.style.display="inline-flex";
	        display.style.WebkitAnimationName="manotas";
	        startTimer(fiveMinutes, display, youtubeLink);

	        
		},2500);
	});


	function startTimer(duration, display, link) {
	    var timer = duration, seconds;
	    setInterval(function () {
	        seconds = parseInt(timer % 60, 10);

	        seconds = seconds < 10 ? "0" + seconds : seconds;

	        display.textContent = seconds;

	        if (--timer < 0) {
	            timer = 0;
	        }
	    }, 1000);
	    setTimeout(function(){
	    	stopi(startTimer);
	    	display.style.WebkitAnimationName="let";
	    	display.style.display="none";
	    	var $atributo = $video.find("iframe").attr("src");
			$video.find("iframe").removeAttr("src");
			var $incluir  = $video.find("iframe").attr("src",$atributo + link+ "?autoplay=1&rel=0&controls=0&modestbranding=1&showinfo=0");
			$video.css("display","block");
	    },4000);
	}

	



});
