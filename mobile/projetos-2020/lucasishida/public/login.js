var btn_login = document.getElementById("botao-login");
var email_login = document.getElementById("email_login");
var password_login = document.getElementById("password_login");

async function login_reqres (email, password)
{
    await axios.post('https://reqres.in/api/login', 
    {
        email: email,
        password: password
    })
    
    .then(function (response)
    {
        if (response.status == 200)
        {
            alert ('You are logged');
            localStorage.setItem("Online", true);
            buscarFatos();
        }
    }
    )
    .catch (function (error) {
        alert ('Invalid datas');
        return false;
    })
}

btn_login.addEventListener('click', (event) => {
    event.preventDefault();

    var email = document.getElementById("email_login").value;
    var password = document.getElementById("password_login").value;

    if ((email == localStorage.getItem("Username")) && password == localStorage.getItem("Password"))
    {
        alert("Login sucessfull");
        localStorage.setItem("Online", true);
    }

    else
    {
        login_reqres (email, password);
        return true;
    }

    return true;
})

function buscarFatos() {
    var fatos = Number(window.prompt("Number os facts:", ""));

    if(fatos == "") {
        alert("Invalid value")
        return false
    }
    else if(fatos == 1) {
        axios.get('https://cat-fact.herokuapp.com/facts/random')
        .then(function(response){
            console.log(response.data)
            confirm("Fact:\n" +response.data.text)
        })
    }
    else {
        axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount='+fatos)
        .then(function(response){
            console.log(response.data)
            for (i = 0; i < fatos; i++)
            {
                confirm("Fact " +(i+1)+":\n" +response.data[i].text)
            }
        })
    }
}