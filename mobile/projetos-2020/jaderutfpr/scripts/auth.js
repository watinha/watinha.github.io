function verifyEmail(field) {

    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);

    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1))
    {
        return true;
    }
    else
    {
        return false;
    }

}

function verifyPassword(field) {

    pass = field.value;

    if (pass.length >= 3)
    {
        return true;
    }
    else
    {
        return false;
    }

}

function checkPassword(field1, field2) {

    pass = field1.value;
    check = field2.value;

    if (pass === check)
    {
        return true;
    }
    else
    {
        return false;
    }

}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#formLogin");
    const createAccountForm = document.querySelector("#formCreateAccount");
    var err = document.createElement('p');
    var succ = document.createElement('p');
    var email_field;
    var password_field;
    var passwordcheck_field;

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        email_field = document.getElementById("email__login");
        password_field = document.getElementById("password__login");

        if(verifyEmail(email_field) && verifyPassword(password_field)){

            axios.get('https://webapi-utfprcp-jader.herokuapp.com/users', {
                params:{
                    email: document.getElementById("email__login").value,
                    password: document.getElementById("password__login").value
                }
            })
            .then(function (response) {
                console.log(response);
                if(response.status === 200){
                    token = response.data.data
                    localStorage.setItem('token', token)
                    loggedIn();
                }
                if(response.status === 201){
                    err.innerHTML = 'Usuário ou senha inválida!'
                    document.getElementById('error--message__login').appendChild(err);
                }
            })
            .catch(function (error) {
                console.log(error)
            });

        }else if(!verifyEmail(email_field)){

            err.innerHTML = 'Formato incorreto de email'
            document.getElementById('error--message__login').appendChild(err);

        }else if(!verifyPassword(password_field)){

            err.innerHTML = 'A senha deve ter no minimo 3 ou mais caracteres'
            document.getElementById('error--message__login').appendChild(err);

        }

        
    });

    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();

        email_field = document.getElementById("email__register");
        password_field = document.getElementById("password__register");
        passwordcheck_field = document.getElementById("password__check__register");
        err.innerHTML = ''
        succ.innerHTML = ''
        document.getElementById('error--message__register').appendChild(err);
        document.getElementById('success--message__register').appendChild(succ);
        

        if(verifyEmail(email_field) && verifyPassword(password_field) && checkPassword(password_field, passwordcheck_field)){

            axios.post('https://webapi-utfprcp-jader.herokuapp.com/users', {
                email: email_field.value,
                password: password_field.value
            })
            .then(function (response) {
                console.log(response)
                if(response.status === 200){
                    succ.innerHTML = 'Registrado com sucesso!'
                    document.getElementById('success--message__register').appendChild(succ);
                }
                if(response.status === 201){
                    err.innerHTML = 'Usuário já cadastrado!'
                    document.getElementById('error--message__register').appendChild(err);
                }
            })
            .catch(function (error) {
                console.log(error)
            });

        }else if(!verifyEmail(email_field)){

            err.innerHTML = 'Formato incorreto de email'
            document.getElementById('error--message__register').appendChild(err);

        }else if(!verifyPassword(password_field)){

            err.innerHTML = 'A senha deve ter no minimo 3 ou mais caracteres'
            document.getElementById('error--message__register').appendChild(err);

        }else if(!checkPassword(password_field, passwordcheck_field)){

            err.innerHTML = 'As senhas não coincidem'
            document.getElementById('error--message__register').appendChild(err);

        }

    });

});