window.addEventListener('load', function () {

  var auth = localStorage.jwt;

  document.querySelector(".deslogar").addEventListener("click", function(){
    localStorage.removeItem("jwt");
    window.location.reload();
  });


  var container = document.querySelector(".itens");
  document.getElementById("card").style.display = "none";

  console.log(localStorage.jwt)

  if(!auth){
    document.getElementById("pesquisa").style.display = "none";
    document.querySelector(".subtitle").innerHTML = 'É necessário <a href="telalogin.html">Logar</a> ou <a href="telaregistro.html">Criar uma conta</a> para pesquisar';
  }

  document.querySelector("#ordernow").addEventListener("click", function(){
      var query = document.querySelector('#searchtxt').value;
      document.getElementById("card").style.display = "block";

      if(query == ""){
        document.querySelector(".plus").innerHTML = "Escolha um personagem"
        return;
      }
      if(query.length < 3){
        document.querySelector(".plus").innerHTML = "O campo deve conter mais do que três dígitos"
        return;
      }

      axios
          .get("https://rickandmortyapi.com/api/character/?name=" + query)
          .then(function(res){
              var results = res.data.results

              for(var i = 0; i < results.length; i++){
                  var li = document.createElement("li")
                  li.innerHTML += `Nome: ${results[i].name} <br />` 
                  li.innerHTML += `Status Personagem: ${results[i].status} <br />`
                  li.innerHTML += `Sexo do personagem: ${results[i].gender} <br />`
                  li.innerHTML += `Espécie: ${results[i].species} </br>`
                  li.innerHTML += '<br></br>'
                  
                  container.appendChild(li)
              }
          }).catch((error) => {
            document.querySelector('.plus').value= error.response.data.error;
        });
  })
})
