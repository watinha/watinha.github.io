
/*
* Francisco da Crux Xavier
* 30/02/2017
*
* menu interno netflix
*/
window.onload = function(){//ao carregar a pagina
						document.getElementById("2").style.display = 'none';
						document.getElementById("3").style.display = 'none';

				}
				
function menu(opcao){
	console.log("oi");
	if(opcao == 1){
		document.getElementById("2").style.display = 'none';
		document.getElementById("3").style.display = 'none';
		document.getElementById('1').style.display = 'block';//show this
		document.getElementById('bar-1').className += ' active'; 
		document.getElementById('bar-2').className = ' barra-menu'; 
		document.getElementById('bar-3').className = ' barra-menu'; 
	}else if(opcao == 2){
		document.getElementById("1").style.display = 'none';
		document.getElementById("3").style.display = 'none';
		document.getElementById('2').style.display = 'block';//show this
		document.getElementById('bar-2').className += ' active';
		document.getElementById('bar-1').className = ' barra-menu'; 
		document.getElementById('bar-3').className = ' barra-menu';  
	}else if(opcao == 3){
		document.getElementById("2").style.display = 'none';
		document.getElementById("1").style.display = 'none';
		document.getElementById('3').style.display = 'block';//show this
		document.getElementById('bar-3').className += ' active'; 
		document.getElementById('bar-2').className = ' barra-menu'; 
		document.getElementById('bar-1').className = ' barra-menu'; 
	}
	
}