var username = document.getElementById("username");
var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");
var btn_cadastrar = document.getElementById("botao-cadastrar");

//função validar username - comparar senha - cadastrar no bd
btn_cadastrar.addEventListener('click', (event) => {
    event.preventDefault();

    var username_value = document.getElementById("username").value;
    var password_value = document.getElementById("password").value;
    var confirm_password_value = document.getElementById("confirm_password").value;

    if (username_value == "")
    {
        alert("Invalid Username");
        return false;
    }

    else if (password_value != confirm_password_value)
    {
        alert("Different Passwords");
        return false;
    }

    else if (password_value.length < 3)
    {
        alert("Password too short");
        return false;
    }   
    save_data();
    return true;
})
//salvar dados no bd
function save_data () {
    localStorage.setItem("Username", username.value);
    localStorage.setItem("Password", password.value);
    alert("Sucess");
    return true;
}


