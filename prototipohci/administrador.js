dojo.addOnLoad(function(){
			dojo.require("dijit.form.TextBox");
			dojo.require("dijit.form.Button");
			dojo.require("dijit.Tooltip");
			dojo.require("dijit.Dialog");
			dojo.require("dojo.parser");
			
			var numeroLinhas = document.getElementsByTagName("tr").length;
			var numeroColunas = document.getElementsByTagName("tr")[0].cells.length;

			dojo.byId("icone11Completa").style.display = "none";
			dojo.byId("icone12Completa").style.display = "none";
			dojo.byId("icone13Completa").style.display = "none";
			dojo.byId("icone14Aberta").style.display = "none";
			dojo.byId("icone15Aberta").style.display = "none";

			dojo.byId("icone11Participa").style.display = "none";
			dojo.byId("icone12Participa").style.display = "none";
			dojo.byId("icone13Participa").style.display = "none";
			dojo.byId("icone14Participa").style.display = "none";
			dojo.byId("icone15Participa").style.display = "none";

			dojo.byId("recusarBanca11").style.display = "none";
			dojo.byId("recusarBanca12").style.display = "none";
			dojo.byId("recusarBanca13").style.display = "none";

			dojo.byId("celula1 4").style.backgroundColor = "#AABBCC";
			dojo.byId("celula1 5").style.backgroundColor = "#AABBCC";

			dojo.fadeOut({node: "inf11",duration: 1}).play();

			/*
			 * Funcionalidades da primeira banca (domingo no primeiro horário)
			 */
			dojo.byId("link11").onclick = function(ev){
				dijit.byId("dialogEscolhaBanca11").show();				
			}
			dojo.byId("aceitarBanca11").onclick = function(ev){
				dijit.byId("dialogEscolhaBanca11").hide();
				dojo.byId("icone11Aberta").style.display = "none";
				dojo.byId("icone11Completa").style.display = "block";
				dojo.byId("icone11Participa").style.display = "block";
				dojo.byId("celula1 1").style.backgroundColor = "#AABBCC";
				dojo.byId("aceitarBanca11").style.display = "none";
				dojo.byId("recusarBanca11").style.display = "block";				
			}
			dojo.byId("recusarBanca11").onclick = function(ev){
				dijit.byId("dialogEscolhaBanca11").hide();
				dojo.byId("icone11Aberta").style.display = "block";
				dojo.byId("icone11Completa").style.display = "none";
				dojo.byId("icone11Participa").style.display = "none";
				dojo.byId("celula1 1").style.backgroundColor = "#FFFFDD";
				dojo.byId("aceitarBanca11").style.display = "block";
				dojo.byId("recusarBanca11").style.display = "none";
			}
			dojo.byId("fechar11").onclick = function(ev){
				dijit.byId("dialogEscolhaBanca11").hide();
			}

			/*
			 * Funcionalidades da segunda banca (segunda-feira no primeiro horário)
			 */
			dojo.byId("link12").onclick = function(ev){
				dijit.byId("dialogEscolhaBanca12").show();
			}
			dojo.byId("aceitarBanca12").onclick = function(ev){
				dijit.byId("dialogEscolhaBanca12").hide();
				dojo.byId("icone12Aberta").style.display = "none";
				dojo.byId("icone12Completa").style.display = "block";
				dojo.byId("icone12Participa").style.display = "block";
				dojo.byId("celula1 2").style.backgroundColor = "#AABBCC";
				dojo.byId("aceitarBanca12").style.display = "none";
				dojo.byId("recusarBanca12").style.display = "block";
			}
			dojo.byId("recusarBanca12").onclick = function(ev){
				dijit.byId("dialogEscolhaBanca12").hide();
				dojo.byId("icone12Aberta").style.display = "block";
				dojo.byId("icone12Completa").style.display = "none";
				dojo.byId("icone12Participa").style.display = "none";
				dojo.byId("celula1 2").style.backgroundColor = "#FFFFDD";
				dojo.byId("aceitarBanca12").style.display = "block";
				dojo.byId("recusarBanca12").style.display = "none";
			}
			dojo.byId("fechar12").onclick = function(ev){
				dijit.byId("dialogEscolhaBanca12").hide();
			}

			/*
			 * Funcionalidades da Terceira banca (terca-feira no primeiro horário)
			 */
			dojo.byId("link13").onclick = function(ev){
				dijit.byId("dialogEscolhaBanca13").show();
			}
			dojo.byId("aceitarBanca13").onclick = function(ev){
				dijit.byId("dialogEscolhaBanca13").hide();
				dojo.byId("icone13Aberta").style.display = "none";
				dojo.byId("icone13Completa").style.display = "block";
				dojo.byId("icone13Participa").style.display = "block";
				dojo.byId("celula1 3").style.backgroundColor = "#AABBCC";
				dojo.byId("aceitarBanca13").style.display = "none";
				dojo.byId("recusarBanca13").style.display = "block";
			}
			dojo.byId("recusarBanca13").onclick = function(ev){
				dijit.byId("dialogEscolhaBanca13").hide();
				dojo.byId("icone13Aberta").style.display = "block";
				dojo.byId("icone13Completa").style.display = "none";
				dojo.byId("icone13Participa").style.display = "none";
				dojo.byId("celula1 3").style.backgroundColor = "#FFFFDD";
				dojo.byId("aceitarBanca13").style.display = "block";
				dojo.byId("recusarBanca13").style.display = "none";
			}
			dojo.byId("fechar13").onclick = function(ev){
				dijit.byId("dialogEscolhaBanca13").hide();
			}

			/*
			 * Funcionalidades da Quarta banca (quarta-feira no primeiro horário)
			 */
			dojo.byId("link14").onclick = function(ev){
				dijit.byId("dialogEscolhaBanca14").show();
			}
			dojo.byId("fechar14").onclick = function(ev){
				dijit.byId("dialogEscolhaBanca14").hide();
			}

			/*
			 * Funcionalidades da Quinta banca (quinta-feira no primeiro horário)
			 */
			dojo.byId("link15").onclick = function(ev){
				dijit.byId("dialogEscolhaBanca15").show();
			}
			dojo.byId("fechar15").onclick = function(ev){
				dijit.byId("dialogEscolhaBanca15").hide();
			}

			/*
			 * Sistema de busca do sistema (filtragem em todos os campos)
			 */
			dojo.byId("filtroBusca").onkeyup = function(ev){
				evento = ev || window.event;
				var str = dojo.byId("filtroBusca").value;
				
				for(var lin = 1; lin < numeroLinhas; lin++){
					for(var col = 1; col < numeroColunas; col++){
						if(dojo.byId("dialogBanca" + lin + "" + col) != null){
							var banca = dojo.byId("dialogBanca" + lin + "" + col).innerHTML;
							if(banca.toUpperCase().match(str.toUpperCase()) == null){
								dojo.fadeOut({node: "celula" + lin + " " + col,duration: 1000}).play();
							}else{
								dojo.fadeIn({node: "celula" + lin + " " + col,duration: 1000}).play();
							}
						}else
							dojo.fadeOut({node: "celula" + lin + " " + col,duration: 1000}).play();	
						if(dojo.byId("filtroBusca").value.length == 0)
							dojo.fadeIn({node: "celula" + lin + " " + col,duration: 1000}).play();																				
					}
				}
			}	

		});