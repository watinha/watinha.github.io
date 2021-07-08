document.getElementById("email").value = "";
document.getElementById("login").value = "";
const btn = document.getElementsByClassName("ins");
var modal = document.querySelector('.modal');
var modal2 = document.querySelector('.modal2');
var cancel = document.querySelector('.cancel');
var cancel2 = document.querySelector('#cancel');
var modal_bg = document.querySelector('.modal_bg');
var modal_bg2 = document.querySelector('.modal_bg2');
var btn_cad = document.querySelector('#btn_cad');
var login_btn = document.querySelector('#login-button');
var loginInfo = document.querySelector('.loginInfo');
var online = document.querySelector('#online');
var btn_logout = document.querySelector('#btn_logout');
var btn_buscar = document.querySelector('#btn_buscar');
var btn_conteudo = document.querySelector('#btn_conteudo');
var coin_post = document.querySelector('#coin_post');
var api_search = document.querySelector('#api_search');
var searchcontainer = document.querySelector('#searchcontainer');

async function checaMoeda(nome){ 
  flag = 1
  await axios.get('https://aula-web.herokuapp.com/coins')
  .then(function(response)
  {
    for (const i in response.data) {
      if(response.data[i].Nome == nome){
        flag = 0
      }
    }
  })  
  return flag
}

async function buscaMoeda(nome){ 
  coin = null
  await axios.get('https://aula-web.herokuapp.com/coins')
  .then(function(response)
  {
    for (const i in response.data) {
      if(response.data[i].Nome == nome){
        coin = response.data[i]
        return coin
      }
    }
  })  
  return coin
}

async function chamaPost(login,senha){ 
  axios.post('https://aula-web.herokuapp.com/register',{

    Email: login,
    Senha: senha

  }).then(function (response) {
    modal.classList.remove("modal_active")
    modal_bg.classList.remove("modal_active")
    var x = document.getElementById("snack2");
    x.innerHTML = "Cadastrado com sucesso."
    x.className = "snackbarresposta show";
    setTimeout(function(){ x.className = x.className.replace("snackbarresposta show", "snackbarresposta"); }, 3000);
  })
  .catch(function (error) {
    var x = document.getElementById("snack2");
    x.innerHTML = "Email já existe"
    x.className = "snackbarresposta show";
    setTimeout(function(){ x.className = x.className.replace("snackbarresposta show", "snackbarresposta"); }, 3000);
  }) 
}

async function postaMoeda(nome,compra,venda){ 
  axios.post('https://aula-web.herokuapp.com/coins',{
    Nome: nome,
    PrecoCompra: compra,
    PrecoVenda: venda
  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  }) 
}

coin_post.addEventListener('click', async (event) => {
  event.preventDefault();
  var nome = document.getElementById("coin_name").value;
  var compra = document.getElementById("coin_buy").value;
  var venda = document.getElementById("coin_sell").value;
  if(nome == '' || compra == '' || venda ==''){
    var x = document.getElementById("snack16");
    x.className = "snackbar show";
    setTimeout(function(){ x.className = x.className.replace("snackbar show", "snackbar"); }, 3000);
    return false
  }
  if(!(await checaMoeda(nome))){
    var x = document.getElementById("snack14");
    x.className = "snackbar show";
    setTimeout(function(){ x.className = x.className.replace("snackbar show", "snackbar"); }, 3000);
    return false
  }
  else{
    await postaMoeda(nome,compra,venda)
    var x = document.getElementById("snack15");
    x.className = "snackbar show";
    setTimeout(function(){ x.className = x.className.replace("snackbar show", "snackbar"); }, 3000);
    document.getElementById("coin_name").value = ''
    document.getElementById("coin_buy").value = ''
    document.getElementById("coin_sell").value = ''
    return true
  }
})

btn_conteudo.addEventListener('click', (event) => {
  event.preventDefault();
  modal_bg2.classList.add("modal2_active")
  modal2.classList.add("modal2_active")
})

searchcontainer.addEventListener('submit', (event) => {
  event.preventDefault();
})

btn_buscar.addEventListener('click', async (event) => {
  event.preventDefault();
  if(api_search.value == ""){
    var x = document.getElementById("snack1");
    x.className = "snackbar show";
    setTimeout(function(){ x.className = x.className.replace("snackbar show", "snackbar"); }, 3000);
    return false
  }
  else{
    response = await buscaMoeda(api_search.value)
    console.log(response)
    if(!response){
      var x = document.getElementById("snack3");
      x.className = "snackbar show";
      setTimeout(function(){ x.className = x.className.replace("snackbar show", "snackbar"); }, 3000);
      return false
    }
    else{
      var x = document.getElementById("snack2");
      x.innerHTML ='Moeda: '+api_search.value.toUpperCase()+', Preço de compra: R$ '+response.PrecoCompra+', Preço de venda: R$ '+response.PrecoVenda
      x.className = "snackbarresposta show";
      setTimeout(function(){ x.className = x.className.replace("snackbarresposta show", "snackbarresposta"); }, 3000);
    }
  }
})

function refresh(){
  if(localStorage.getItem("logado") == "true"){
    online.classList.add("logado");
    loginInfo.classList.add("loginInfo_none");
    online.classList.remove("deslogado");

  }
  else{
    console.log("entrei")
    online.classList.remove("logado");
    loginInfo.classList.remove("loginInfo_none");
  }
}

refresh();

btn_logout.addEventListener('click', (event) => {
  event.preventDefault();
  localStorage.setItem("logado", false);
  window.location.reload(true);
  refresh();
})



btn_cad.addEventListener('click', async(event) => {
event.preventDefault();

  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;
  var rt_senha = document.getElementById("rt_senha").value;


  if(login == ""){
    var x = document.getElementById("snack4");
    x.className = "snackbar show";
    setTimeout(function(){ x.className = x.className.replace("snackbar show", "snackbar"); }, 3000);
  return false
  }

  if( senha != rt_senha){
    var x = document.getElementById("snack5");
    x.className = "snackbar show";
    setTimeout(function(){ x.className = x.className.replace("snackbar show", "snackbar"); }, 3000);
      return false
  }

  if( senha == "" || rt_senha == ""){
    var x = document.getElementById("snack6");
    x.className = "snackbar show";
    setTimeout(function(){ x.className = x.className.replace("snackbar show", "snackbar"); }, 3000);
    return false
    }

  if( senha.length < 3 ){
    var x = document.getElementById("snack7");
    x.className = "snackbar show";
    setTimeout(function(){ x.className = x.className.replace("snackbar show", "snackbar"); }, 3000);
    return false
  }
  else{
    await chamaPost(login,senha)
  }
  return true;
})

login_btn.addEventListener('click', async (event) => {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i;
  if(!emailRegex.test(email)){
    var x = document.getElementById("snack10");
    x.className = "snackbar show";
    setTimeout(function(){ x.className = x.className.replace("snackbar show", "snackbar"); }, 3000);
    return 0;
  }
  if(password == ""){
    var x = document.getElementById("snack11");
    x.className = "snackbar show";
    setTimeout(function(){ x.className = x.className.replace("snackbar show", "snackbar"); }, 3000);
    return 0;
  }
  else{
    try{
      await axios.post('https://aula-web.herokuapp.com/authenticate',{Email:email,Senha:password})
    .then(function(){
      localStorage.setItem("logado", true);
      refresh();
      return true
    })
    }catch{
        var x = document.getElementById("snack2");
        x.innerHTML = "Credenciais inválidas"
        x.className = "snackbarresposta show";
        setTimeout(function(){ x.className = x.className.replace("snackbarresposta show", "snackbarresposta"); }, 3000);
    }
  }
})
  

function storage(){
  localStorage.setItem("login", login.value)
  localStorage.setItem("senha", senha.value)
  var x = document.getElementById("snack13");
  x.className = "snackbar show";
  setTimeout(function(){ x.className = x.className.replace("snackbar show", "snackbar"); }, 3000);
  return true
}
  


const myFunction = function(){
  modal.classList.add("modal_active")
  modal_bg.classList.add("modal_active")
}



for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', myFunction, false);
}

cancel.addEventListener('click', () => {
  modal.classList.remove("modal_active")
  modal_bg.classList.remove("modal_active")
})

cancel2.addEventListener('click', () => {
  modal2.classList.remove("modal2_active")
  modal_bg2.classList.remove("modal2_active")
})
