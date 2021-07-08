const sign_up_btn = document.querySelector('#button1')
const sign_in_btn = document.querySelector('#button2')

if(localStorage.getItem('token')){
  
  window.location.href = "./home.html";
}

sign_up_btn.addEventListener('click', () => {
  window.location.href = "./register.html";
})

sign_in_btn.addEventListener('click', () => {
  window.location.href = "./login.html";
})