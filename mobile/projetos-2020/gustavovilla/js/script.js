function icon_menu() {
  var icon_drop = document.getElementById("icon_drop");
  var p_login = document.getElementById("p_login");
  var p_cadastro = document.getElementById("p_cadastro");

  p_login.className = "ocult";
  p_cadastro.className = "ocult";
  icon_drop.addEventListener("click", function () {
    if(mobile.className=="mobile_menu_top")
        mobile.className = "aparecer";
    else
       mobile.className = "mobile_menu_top";
  });
}
function buscar() {
    var p_login = document.getElementById("p_login");
    var p_busca = document.getElementById("p_busca");
    var p_cadastro = document.getElementById("p_cadastro");

    var dialog = document.getElementById("dialog_index");
    var c_login = document.getElementById("mensagem_index");
    var botao_conf_index = document.getElementById("botao_conf_index");
    var btn_pesquisar = document.getElementById("btn_pesquisar");
  
    btn_pesquisar.addEventListener("click", function () {
      var token = localStorage.getItem("token");
      console.log();
      if (token == undefined) {
        c_login.innerHTML = "Realize o login para buscar as fotos.";
        dialog.className = "dialog show";
      } else {
        p_login.className = "ocult";
        p_busca.className = "subrot";
        p_cadastro.className = "ocult";
       }
    });
  
    botao_conf_index.addEventListener("click", function () {
      p_login.className = "subrot";
      p_busca.className = "ocult";
      p_cadastro.className = "ocult";
      dialog.className = "dialog";
    });
    var aux = 0;
    var i = 0;
    var container = document.querySelector('.ba ul');
    var ab = document.getElementById("button_2");
    ab.addEventListener('click', function(){
        var img = document.getElementById("result");
        var query = document.querySelector('input').value;
        var token = localStorage.getItem("token");
        axios.get('https://pixabay.com/api/?key=10320628-f0c28196809ced6ff2d596882&q=' +query)
        .then(function(res){
          if (token == undefined) {
           }
          else{
            var hits = res.data.hits;
            for(var i=0; i<8; i++){
              var li = document.createElement('li'),
              img=document.createElement('img');
              li.innerHTML = hits[i].largeImageURL;
              img.src= li.innerHTML;
              container.appendChild(img);
              aux++;
             }
            };
        });
      });
}
function login() {
  var form = document.getElementById("button_login");
  var username = document.getElementById("username_login");
  var passwd = document.getElementById("passwd_login");
  var verificacao1 = document.getElementById("verificacao1name_login");
  var verificacao2 = document.getElementById("verificacao2_login");
  var retorno = 400; //resposta do servidor
  var botao_conf = document.getElementById("botao_conf_login")
  var dialog = document.getElementById("dialog_login");
  var c_login = document.getElementById("login_m");

  username.addEventListener("keyup", function () {
    if (verificacao3(username)) {
      verificacao1.innerHTML = "";
    } else {
      username.classList.toggle("bordacaixa");
      verificacao1.innerHTML = "Digite um e-mail corretamente";
    }
  });

  passwd.addEventListener("keyup", function () {
    if (passwd.value.length < 3) {
      verificacao2.innerHTML = "Senha deve ter no mínimo 3 caracteres";
    } else {
      verificacao2.innerHTML = "";
    }
  });

  form.addEventListener("click", function () {
    if (verificacao3(username) && passwd.value.length >= 3) {
      var json = axios
        .post("https://reqres.in/api/login", {
          email: username.value,
          password: passwd.value,
        })
        .then(function (r) {
          if (r.status == 200) { //resposta servidor
            localStorage.setItem("token", r.data.token); //armazenar login mesmo atualizando a página
            c_login.innerHTML = "Login realizado, agora é possível realizar a busca";
            dialog.className = "dialog show";
            retorno = r.status;
           }

          })
        .catch(function (error) {
          c_login.innerHTML = "Dados incorretos";
          dialog.className = "dialog show";
          retorno = 400; //resposta servidor
        })
    } else {
      c_login.innerHTML = "Dados inválidos";
      dialog.className = "dialog show";
      retorno = 400; //resposta servidor
    }
  });

    botao_conf.addEventListener("click", function () {
      dialog.className = "dialog";
      var p_busca = document.getElementById("p_busca");
      var p_login = document.getElementById("p_login");
      var p_cadastro = document.getElementById("p_cadastro");

      if (retorno == 200) {
      p_busca.className = "subrot";
      p_login.className = "ocult";
      p_cadastro.className = "ocult";
    }
  });
}
function join() {
    var botao_join = document.getElementById("button");
    var usuario = document.getElementById("usuario");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    var dialog = document.getElementById("dialog_cadastro");
    var c_login = document.getElementById("mensagem_cadastro");
    var botao_conf = document.getElementById("botao_conf_cadastro");
    var retorno = 400; //resposta servidor
    var val_usuario = document.getElementById("usuario-verify");
    var val_email = document.getElementById("email-verify");
    var val_senha = document.getElementById("senha-verify");
    var aux_usuario = false;
    var aux_email = false;
    var aux_senha = false;

      usuario.addEventListener("keyup", function () { //verificações
        if (usuario.value == "") {
          val_usuario.innerHTML = "Necessário preencher um usuário";
        }
        if (usuario.value.length < 3) {
          val_usuario.innerHTML = "Necessário 3 caractéres no mínimo";
        } else {
          val_usuario.innerHTML = "";
          aux_usuario=1;
        }
      });
    
      email.addEventListener("keyup", function () {
        if (email.value == "") {
          val_email.innerHTML = "Digite um e-mail corretamente";
        } else if (verificacao3(email)) {
          aux_email = true;
          val_email.innerHTML = "";
        } else {
          email.classList.toggle("bordacaixa");
          val_email.innerHTML = "Email inválido";
        }
      });
  
    senha.addEventListener("keyup", function () {
        if (senha.value == "") {
          val_senha.innerHTML = "Senha deve ser preenchida";
        }
        if (senha.value.length < 3) {
          val_senha.innerHTML = "Senha deve ter no mínimo 3 caracteres";
        } else {
          val_senha.innerHTML = "";
          aux_senha=1;
        }
     });
  
    botao_join.addEventListener("click", function () {
      if (aux_email == true && aux_senha==1 && aux_usuario==1) {
        var json = axios
          .post("https://reqres.in/api/register", {
            email: email.value,
            password: senha.value,
          })
          .then(function (response) {
            if (response.status == 200) {
              c_login.innerHTML = "Cadastro realizado, faça o login";
              dialog.className = "dialog show";
              retorno = response.status;
            }
          })
          .catch(function (error) {
            c_login.innerHTML = "Dados não aceitos pela base de dados";
            dialog.className = "dialog show";
            retorno = 400;
          });
      }
  
      else {
        c_login.innerHTML = "Dados inválidos";
        dialog.className = "dialog show";
        retorno = 400;
      }
       });
  
    botao_conf.addEventListener("click", function () {
      dialog.className = "dialog";

      if (retorno == 200) {
        var p_login = document.getElementById("p_login");
        var p_busca = document.getElementById("p_busca");
        var p_cadastro = document.getElementById("p_cadastro");
  
        p_login.className = "subrot";
        p_busca.className = "ocult";
        p_cadastro.className = "ocult";
      }
    });
    var btn_logar2 = document.getElementById("btn_inicio");
    btn_logar2.addEventListener("click", function () {
      p_login.className = "subrot";
      p_busca.className = "ocult";
      p_cadastro.className = "ocult";
    });
}
function verificacao3(email) {
    usuario = email.value.substring(0, email.value.indexOf("@"));
    dominio = email.value.substring(
      email.value.indexOf("@") + 1,
      email.value.length
    ); 
      if (
      usuario.length >= 1 &&
      dominio.length >= 3 &&
      usuario.search("@") == -1 &&
      dominio.search("@") == -1 &&
      usuario.search(" ") == -1 &&
      dominio.search(" ") == -1 &&
      dominio.search(".") != -1 &&
      dominio.indexOf(".") >= 1 &&
      dominio.lastIndexOf(".") < dominio.length - 1
    ) {
      return true;
    } else {
      return false;
    }
}
function logar() {
  var link_logar1 = document.getElementById("link_logar1");
  var link_logar2 = document.getElementById("link_logar2");
  var p_login = document.getElementById("p_login");
  var p_busca = document.getElementById("p_busca");
  var p_cadastro = document.getElementById("p_cadastro");

  link_logar1.addEventListener("click", function () {
    p_cadastro.className = "ocult";
    p_login.className = "subrot";
    p_busca.className = "ocult";
    mobile.className = "mobile_menu_top";
  });

  link_logar2.addEventListener("click", function () {
    p_cadastro.className = "ocult";
    p_login.className = "subrot";
    p_busca.className = "ocult";
    mobile.className = "mobile_menu_top";
  });
}
  function cadastro() {
    var link_cadastrar = document.getElementById("link_cadastrar");
    var link2_cadastrar = document.getElementById("link2_cadastrar");
    var link3_cadastrar = document.getElementById("link3_cadastrar");
    var p_login = document.getElementById("p_login");
    var p_busca = document.getElementById("p_busca");
    var p_cadastro = document.getElementById("p_cadastro");
  
    link_cadastrar.addEventListener("click", function () {
      p_cadastro.className = "subrot";
      p_login.className = "ocult";
      p_busca.className = "ocult";
    });

    link2_cadastrar.addEventListener("click", function () {
      p_cadastro.className = "subrot";
      p_login.className = "ocult";
      p_busca.className = "ocult";
    });

    link3_cadastrar.addEventListener("click", function () {
      p_cadastro.className = "subrot";
      p_login.className = "ocult";
      p_busca.className = "ocult";
      mobile.className = "mobile_menu_top";
    });
}
function pixabay() {
  var p_login = document.getElementById("p_login");
  var p_busca = document.getElementById("p_busca");
  var p_cadastro = document.getElementById("p_cadastro");
  var pixabay = document.getElementById("pixabay");

  pixabay.addEventListener("click", function () {
  p_login.className = "ocult";
  p_busca.className = "subrot";
  p_cadastro.className = "ocult";
  });
}