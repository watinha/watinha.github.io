const sign_in_btn = document.querySelector('#button2')
const sign_up_btn = document.querySelector('#sign-up-btn')
const sign_up = document.querySelector('#button-su')
const error_message = document.querySelector('#error-message')

var email = document.querySelector("#input-email");
var password = document.querySelector("#input-pwd");

if(localStorage.getItem('token')){
  
  window.location.href = "./home.html";
}

sign_in_btn.addEventListener('click', () => {
  
  if(email.value.length > 3 && password.value.length > 3 && validateEmail(email.value)){

    axios.post(`https://twitter-express-backend.herokuapp.com/login`, 
     {
        email: email.value,
        password: password.value
     }
    )
      .then(res => {
        console.log(JSON.stringify(res.data))
        if(res.data.token){
          localStorage.setItem('token', res.data.token)
          window.location.href = "./home.html";
            
          console.log(JSON.stringify(res.data.token))
        }else{
          showErrorMessage("Erro: Dados Invalidos")
        }
      })
      .catch(err => {      
        showErrorMessage(err.message)
      })
    }else{
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
