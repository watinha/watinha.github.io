const sign_in_btn = document.querySelector('#fsadfsa')
const sign_up_btn = document.querySelector('#button2')
const sign_up = document.querySelector('#button-su')
const error_message = document.querySelector('#error-message')

var email = document.querySelector("#input-email");
var password = document.querySelector("#input-pwd");

if(localStorage.getItem('token')){
  
  window.location.href = "./home.html";
}

sign_up_btn.addEventListener('click', (event) => {
  event.preventDefault()

  if(email.value.length > 3 && password.value.length > 3 && validateEmail(email.value)){

    showErrorMessage(" ");
    axios.post("https://twitter-express-backend.herokuapp.com/register", 
     {
        email: email.value,
        password: password.value
      }
    )
      .then(res => {
        localStorage.setItem('token', res.data.token)

        window.location.href = "./login.html";
        console.log(password.value)
      })
      .catch(err => {      
        showErrorMessage(err.message)
      })
  } else{
    showErrorMessage("Erro: Dados Invalidos")
  }
    
})

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function showErrorMessage(value){

  error_message.textContent = value;
  console.log(value);
}
