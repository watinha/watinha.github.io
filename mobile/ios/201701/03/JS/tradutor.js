
/*redireciona para opcao selecionada*/
function tradutor(){
				var idioma = document.getElementById("idioma");
   				var valor = idioma.options[idioma.selectedIndex].value;
   			    console.log("oi");
   			    if(valor=="PT"){
   			    	window.location = "../br/index.html";
   			    }else{
   			    	window.location = "../us/index.html";
   			    }
}