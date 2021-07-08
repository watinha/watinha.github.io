window.addEventListener('load', function () {

  document.querySelector(".form").addEventListener("submit", function(e){
    e.preventDefault(); 
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    axios
        .post("https://reqres.in/api/login", { email, password })
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
