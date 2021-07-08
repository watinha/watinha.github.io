var entrarLogin = document.getElementById("BtnSubmit"); 
var entrarCadastro = document.getElementById("BtnSubmit_cadastro");
let serverTalk = ""; // mensagens de erro do servidor vão ser armazenados aqui

if (entrarLogin != null){ // está no modo de Login
	entrarLogin.addEventListener("click", function (event){
		requisicaoLogin();
	});
}

if (entrarCadastro != null){ // está no modo de Registro
    entrarCadastro.addEventListener("click", function (event){
		requisicaoCadastro();
	});
}

function chamaModal(modalID){
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');

    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.className == 'fecharModal'){
            modal.classList.remove('mostrar');
        }
    });
}

function requisicaoLogin(){
	var campoUser = document.getElementById("email_login");
	var campoSenha = document.getElementById("password_login");

	if(fazerValidacao(campoUser,campoSenha,"onLogin") == true){ // faz a validação do campo
		doLogin(campoUser.value, campoSenha.value, function (response){ 
                if(response.status === 400 || response.error == "user not found"){ // usuário inválido do reqRes, logo não permite fazer login e gerar token (error 400)
                    chamaModal('Modal1'); // erro de validação (email inválido)
                    return false;
                }
				localStorage.setItem("token", response.token); // o usuário existe no reqRes, logo faz login
				irPageAPI();         
		});
	}
}

function requisicaoCadastro(){
	var campoUser = document.getElementById("email_login");
	var campoSenha = document.getElementById("password_login");

	if(fazerValidacao(campoUser,campoSenha,"onRegister") == true){
		doRegister(campoUser.value, campoSenha.value, function (response){
            if(response.status === 400 || response.error == "Note: Only defined users succeed registration"){ // usuário inválido do reqRes, logo não permite registrar e gerar token (error 400)
                chamaModal('Modal1'); // erro de validação (email inválido)
                return false;
            }
            localStorage.setItem("token", response.token); // o usuário existe no reqRes, logo faz registro
            irPageAPI();   
		});
	}
}

function doLogin(email, password, callback){
	var requisicao = new XMLHttpRequest();
	requisicao.open("POST", "https://reqres.in/api/login", true);
	requisicao.setRequestHeader("Content-Type", "application/json; charset=utf-8")
	requisicao.onreadystatechange = function () {

		if(requisicao.readyState !== 4){
			return;
		}
		callback(JSON.parse(requisicao.responseText));
	};
	requisicao.send(JSON.stringify({ // converte valores em javascript para uma String JSON
		email: email,
		password: password
	}));
}

function doRegister(email, password, callback){
    var requisicao = new XMLHttpRequest();

    requisicao.open("POST", "https://reqres.in/api/register", true);
    requisicao.setRequestHeader("Content-Type", "application/json; charset=utf-8");

    requisicao.onreadystatechange = function () {
        if(requisicao.readyState !== 4){
            return;
        }
        callback(JSON.parse(requisicao.responseText));
    };
    requisicao.send(JSON.stringify({ // converte valores em javascript para uma String JSON
        email: email,
        password: password
    }));
}

function irPageAPI(contAPI){
	var contAPI = document.getElementById("contAPI");
    contAPI.classList.add('show');
}

function userLogado(){
	if(localStorage.token){ 
		return true;
	}
    return false;
}

if (userLogado() == true){
    irPageAPI();
}

function fazerValidacao(email,password,type){
    
    // credenciais que o ReqRes tem disponivel e aceita para o login
    var apiOnLoginEmail = "eve.holt@reqres.in";
    var apiOnLoginPassword = "cityslicka";

    // credenciais que o ReqRes tem disponivel e aceita para o registro
    var apiOnRegisterEmail = "eve.holt@reqres.in";
    var apiOnRegisterPassword = "pistol";

    serverTalk = ""; // limpa
    if (userLogado() == true){
        chamaModal('Modal6');
        return false;       
    }
    if(email.value == null || email.value == "") {
        chamaModal('Modal5');
        return false;
    }
    if(password.value == null || password.value == "") {
        chamaModal('Modal2');
        return false;
    }
    if(email.value.length <= 3) {
        chamaModal('Modal3');
        return false;
    }
    if(password.value.length <= 3) {
        chamaModal('Modal4');
        return false;
    }
    return true;
}


	
function deslogar(){
	localStorage.removeItem("token");
	window.location.href = "index.html"
}

// deslogar usuário
var botaoLogout = document.getElementById("BtnLogout"); 
	botaoLogout.addEventListener("click", deslogar);