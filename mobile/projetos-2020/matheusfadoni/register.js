window.addEventListener('load', function () {

  document.querySelector(".form").addEventListener("submit", function(e){
    e.preventDefault(); 

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("confirmpassword").value;

    if(password!=password2){
      document.querySelector(".plus").innerHTML = "Senhas diferentes";
      return;
    }
    if(password==""){
      document.querySelector(".plus").innerHTML = "Senha não pode ser vazia"
      return;
    } 
    if(password.lenght < 3){
      document.querySelector(".plus").innerHTML = "A senha deve contar mais do que três dígitos"
      return;
    }
    if(email==""){
      document.querySelector(".plus").innerHTML = "O endereço de email não pode ser vazio"
      return;
    }
    if(email.lenght < 3){
      document.querySelector(".plus").innerHTML = "O endereço de email deve contar mais do que três dígitos"
      return;
    }



    axios
        .post("https://reqres.in/api/register", { email, password })
        .then(function(res){
          console.log(res);
          localStorage.setItem("jwt", res.data.token);
          window.location.href = "index.html";
        }).catch((error) => {
          console.log(error.response.data.error);
          document.querySelector(".plus").innerHTML = error.response.data.error;
      });
})

})
