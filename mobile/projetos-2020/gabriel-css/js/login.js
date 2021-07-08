const url = "https://reqres.in/api/";
var _token = localStorage.getItem("token"),
    box_login = document.getElementsByClassName("box-login")[0],
    box_busca = document.getElementsByClassName("box-busca")[0],
    div_entrar = document.getElementById("div-entrar"),
    error_span = document.getElementById("error-span");

if (_token) {
    logar();
} else {
    deslogar();
    box_login.className = "box-login hide";
}

function logar() {
    box_login.className = "box-login hide";
    box_busca.className = "box-busca";
    div_entrar.innerHTML = "Deslogar";
    div_entrar.className = "logado";
    document.getElementsByClassName("input")[1].value = "";
}

function deslogar() {
    localStorage.removeItem("token");
    box_login.className = "box-login";
    box_busca.className = "box-busca hide";
    div_entrar.innerHTML = "Entrar";
    div_entrar.className = "deslogado";
    error_span.innerHTML = "";
}

function onClickEntrar() {
    if (div_entrar.className === "logado") {
        deslogar();
    } else {
        box_login.className = "box-login show-box-login";
    }
}

function hideBoxLogin() {
    box_login.className = "box-login hide";
}

document.getElementById("btn-login")
    .addEventListener("click", async() => {

        var entrada = document.getElementsByClassName("input")[0].value,
            senha = document.getElementsByClassName("input")[1].value,
            email_h5 = document.getElementsByTagName("h5")[0],
            senha_h5 = document.getElementsByTagName("h5")[1];

        error_span.innerHTML = "";
        email_h5.innerHTML = "E-MAIL OU NÚMERO DE TELEFONE";
        senha_h5.innerHTML = "SENHA";
        email_h5.className = "";
        senha_h5.className = "";

        if ((entrada === "" || !entrada.trim()) && (senha === "" || !senha.trim())) {
            senha_h5.className = "error";
            senha_h5.innerHTML = "SENHA - Este campo é obrigatório";
            email_h5.className = "error";
            return email_h5.innerHTML = "E-MAIL OU NÚMERO DE TELEFONE - Este campo é obrigatório";
        }
        if (senha === "" || !senha.trim()) {
            senha_h5.className = "error";
            return senha_h5.innerHTML = "SENHA - Este campo é obrigatório";
        }
        if (entrada === "" || !entrada.trim()) {
            email_h5.className = "error";
            return email_h5.innerHTML = "E-MAIL OU NÚMERO DE TELEFONE - Este campo é obrigatório";
        }

        var params = {
            // email: "eve.holt@reqres.in",
            // password: "cityslicka"
            email: entrada,
            password: senha
        }

        axios.post(`${url}login/`, params)
            .then((res) => {
                if (res.status === 200) {
                    var res2 = res.data;
                    _token = res2.token;
                    error_span.innerHTML = "Logado com sucesso. Aguarde a tela de busca...";
                    localStorage.setItem("token", _token);
                    setTimeout(function() {
                        logar();
                        limparBusca();
                        document.getElementsByClassName("input")[2].value = "";
                        window.location.assign("../#id-busca");
                    }, 4000);
                }
            })
            .catch((error) => {
                console.log(error.response.data);
                var error_msg = error.response.data.error;

                if (error_msg === "user not found") {
                    email_h5.className = "error";
                    return email_h5.innerHTML = "E-MAIL OU NÚMERO DE TELEFONE - Usuário não encontrado";
                }
            })
    });