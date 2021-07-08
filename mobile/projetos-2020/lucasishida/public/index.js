var btn_campos = document.getElementById("campos_login");
var text = document.getElementsByClassName("text_content");
var btn_login = document.getElementById("botao-login");
var btn_cadastro = document.getElementById("botao-cadastro");
var email_login = document.getElementById("email_login");
var password_login = document.getElementById("password_login");
var confirm_passaword = document.getElementById("confirm_passaword");
var fatos = document.getElementsByClassName("fatos");
var token;

function verificarSessão (){

    if (localStorage.getItem("Online") != "true"){
        campo_login("text_content")
    }
    else{
        document.getElementById("logged").style.display = "inline-block";
        document.getElementById("post").style.display = 'block';
    }
}

verificarSessão()

function campo_login (el)
{
    var display = document.getElementById(el).style.display;

    if (localStorage.getItem("Online") == "true")
    {
        document.getElementById("cadastro_content").style.display = 'none';
        document.getElementById(el).style.display = 'none';
        document.getElementById("img_content").style.display = 'none';
        document.getElementById("logged").style.display = "inline-block";
    }
    else if (document.getElementById("cadastro_content").style.display != 'none')
    {
        document.getElementById("cadastro_content").style.display = 'none';
        document.getElementById(el).style.display = 'none';
        document.getElementById("img_content").style.display = 'none';
        document.getElementById("login_content").style.display = 'flex';
        document.getElementById("email_login").innerHTML = ("");
        document.getElementById("password_login").innerHTML = ("");
    }
    else if (display == "none")
    {
        window.location.reload
    }
    else
    {  
        document.getElementById("cadastro_content").style.display = 'none';
        document.getElementById(el).style.display = 'none';
        document.getElementById("img_content").style.display = 'none';
        document.getElementById("login_content").style.display = 'flex';
        document.getElementById("email_login").innerHTML = ("");
        document.getElementById("password_login").innerHTML = ("");
    }
}
function campo_cadastro (el)
{
    var display = document.getElementById(el).style.display;

    if (document.getElementById("login_content").style.display != 'none')
    {
        document.getElementById("login_content").style.display = 'none';
        document.getElementById(el).style.display = 'none';
        document.getElementById("img_content").style.display = 'none';
        document.getElementById("cadastro_content").style.display = 'flex';
        document.getElementById("email_login").innerHTML = ("");
        document.getElementById("password_login").innerHTML = ("");
    }

    else if (display == "none")
    {
        window.location.reload()
    }
    else
    {  
        document.getElementById("login_content").style.display = 'none';
        document.getElementById(el).style.display = 'none';
        document.getElementById("img_content").style.display = 'none';
        document.getElementById("cadastro_content").style.display = 'flex';
        document.getElementById("email_login").innerHTML = ("");
        document.getElementById("password_login").innerHTML = ("");
    }
}
btn_login.addEventListener('click', async (event) => {
    event.preventDefault();

    var email = document.getElementById("email_login").value;
    var password = document.getElementById("password_login").value;

    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i

    if(!emailRegex.test(email))
    {
        localStorage.setItem("Online", false);
        document.getElementById("invalid").style.display = 'block';
        document.getElementById("invalid").innerHTML = ("Invalid data");
        return false;
    }
    else if ((email == localStorage.getItem("Username")) && password == localStorage.getItem("Password"))
    {
        localStorage.setItem("Online", true);
    }

    else
    {
        await chamaGet(email, password)
        return true;
    }

    return true;
})

btn_cadastro.addEventListener('click', async (event) => {
    event.preventDefault();

    var email_cadastro = document.getElementById("email_cadastro").value;
    var password_cadastro = document.getElementById("password_cadastro").value;
    var confirm_password = document.getElementById("confirm_password").value;

    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i

    if(!emailRegex.test(email_cadastro))
    {
        localStorage.setItem("Online", false);
        document.getElementById("invalid_cad").style.display = 'block';
        document.getElementById("invalid_cad").innerHTML = ("Invalid data");
        return false;
    }
    else if (password_cadastro == "")
    {
        localStorage.setItem("Online", false);
        document.getElementById("invalid_cad").style.display = 'block';
        document.getElementById("invalid_cad").innerHTML = ("Invalid data");
    }
    else if (password_cadastro != confirm_password)
    {
        localStorage.setItem("Online", false);
        document.getElementById("invalid_cad").style.display = 'block';
        document.getElementById("invalid_cad").innerHTML = ("Invalid data");
    }
    else
    {
        document.getElementById("invalid_cad").style.display = 'none';
        await chamaPost(email_cadastro, password_cadastro)
        return true;
    }

    return true;
})
async function chamaPost(login,senha){ 
    axios.post('https://dribbbleweb.herokuapp.com/authenticate',{
  
      Email: login,
      Senha: senha
  
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
async function chamaGet(login,senha){ 
    await axios.get('https://dribbbleweb.herokuapp.com/authenticate')
    .then(function(response)
    {
      for (const i in response.data) {
        if(response.data[i].Email == login && response.data[i].Senha == senha){
          localStorage.setItem("Online", true)
          document.getElementById("invalid").style.display = 'none';
          window.location.reload()
          break
        }
        else
        {
            localStorage.setItem("Online", false)
        }
      }
    })  
}
function buscarFatos() {
    document.getElementById("fato").style.display = "block";
    var num = document.getElementById("number").value;
    var i;
    if (num == 1)
    {
        axios.get('https://cat-fact.herokuapp.com/facts/random')
        .then(function(response){
                var novo_fato = ("- "+response.data.text);
                var lista  = document.getElementById("lista_fatos").innerHTML;
                lista = lista +"<li>"+novo_fato+"</li>";
                document.getElementById("lista_fatos").innerHTML = lista;
        })
    }
    else
    {
        axios.get("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount="+num)
        .then(function(response){
            for (i = 0; i < num; i++)
            {
            var novo_fato = ("- "+response.data[i].text);
            var lista  = document.getElementById("lista_fatos").innerHTML;
            lista = lista +"<li>"+novo_fato+"</li>";
            document.getElementById("lista_fatos").innerHTML = lista;
            }
        })
    }        
}

function exit() {
    localStorage.setItem("Online", false);
    window.location.reload()
}

async function postar(){ 
    var novo = document.getElementById("post_novo").value
    axios.post('https://dribbbleweb.herokuapp.com/contribuition',{
        
        Texto: novo
  
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
}

async function mostrar(){
    await axios.get('https://dribbbleweb.herokuapp.com/contribuition')
    .then(function(response)
    {
        var lista2 = document.getElementById("lista-post").innerHTML;
        lista2 = ""
        for (const i in response.data) {
            lista2 = lista2 +"<li>"+response.data[i].Texto+"</li>";
            document.getElementById("lista-post").innerHTML = lista2;
        }
    })
}