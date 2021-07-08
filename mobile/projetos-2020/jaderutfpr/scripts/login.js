function loggedIn() {

    document.getElementById('login--button').classList.remove('login--button');
    document.getElementById('login--button').classList.add('login--button--hidden');
    document.getElementById('logout--button').classList.remove('logout--button--hidden');
    document.getElementById('logout--button').classList.add('logout--button')
    document.getElementById('auth').classList.remove('wrapper-auth');
    document.getElementById('auth').classList.add('wrapper-auth-hidden');
    document.getElementById('sentim').classList.remove('wrapper-sentim-hidden');
    document.getElementById('sentim').classList.add('wrapper-sentim');
    document.getElementById('logout--button').addEventListener('click', function(){
        loggedOut();
    });

}

function loggedOut() {

    localStorage.removeItem('logged');
    document.getElementById('login--button').classList.add('login--button');
    document.getElementById('login--button').classList.remove('login--button--hidden');
    document.getElementById('logout--button').classList.add('logout--button--hidden');
    document.getElementById('logout--button').classList.remove('logout--button');
    document.getElementById('auth').classList.add('wrapper-auth');
    document.getElementById('auth').classList.remove('wrapper-auth-hidden');
    document.getElementById('sentim').classList.add('wrapper-sentim-hidden');
    document.getElementById('sentim').classList.remove('wrapper-sentim');

}