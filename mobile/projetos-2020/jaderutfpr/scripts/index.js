if(localStorage.getItem("logged") !== null) {
    
    loggedIn();

} else {

    loggedOut();
    
}

document.getElementById('input__api').addEventListener('click', function() {

    var query = document.getElementById('text__input__api').value;
    var type = document.getElementById('type__input__api').value;
    var polarity = document.getElementById('polarity__input__api').value;
    var error = document.getElementById('error');
    var text = document.getElementById('text');
    var textbits = document.getElementById('textbits');
    var errortext = document.createElement('p');

    if(query.length < 10) {
        error.innerHTML = ' ';
        text.innerHTML = ' ';
        textbits.innerHTML = ' ';
        errortext.innerHTML = 'A entrada deve conter pelo menos 10 caracteres.'
        error.appendChild(errortext);
    }

    else {

        error.innerHTML = ' ';
        text.innerHTML = ' ';
        textbits.innerHTML = ' ';
        axios.post('https://webapi-utfprcp-jader.herokuapp.com/sentim', {
            text: query,
            type: type,
            polarity: polarity,
            token: localStorage.getItem('token')
        }, {
            headers: {
                Accept: "application/json", "Content-Type": "application/json"
            }
        }).then(function(response) {
            console.log(response)
            if(response.status === 200){
                errortext.innerHTML = 'Sucesso.'
                error.appendChild(errortext);
            }
        }).catch(function(error) {
            console.log(error);
        });

    }

});

document.getElementById('search__api').addEventListener('click', function() {

    var query = document.getElementById('text__search__api').value;
    var error = document.getElementById('error');
    var text = document.getElementById('text');
    var textbits = document.getElementById('textbits');
    var errortext = document.createElement('p');

    if(query.length < 1) {
        error.innerHTML = ' ';
        text.innerHTML = ' ';
        textbits.innerHTML = ' ';
        errortext.innerHTML = 'A entrada deve conter pelo menos 1 caractere.'
        error.appendChild(errortext);
    }

    else {

        error.innerHTML = ' ';
        text.innerHTML = ' ';
        textbits.innerHTML = ' ';
        axios.get('https://webapi-utfprcp-jader.herokuapp.com/sentim', {
            params:{
                text: query,
                token: localStorage.getItem('token')
            }
        }).then(function(response) {
            console.log(response)
            data = response.data.data

            for(var i = 0; i < data.length; i++) {

                var sentence = document.createElement('p');
                var polarity = document.createElement('p');
                var type = document.createElement('p');

                sentence.innerHTML = "Frase " + (i+1) + ": " + data[i].text;
                polarity.innerHTML = "Polaridade: " + data[i].polarity;
                type.innerHTML = "Tipo: " + data[i].type;

                textbits.appendChild(sentence);
                textbits.appendChild(polarity);
                textbits.appendChild(type);

            }

        }).catch(function(error) {
            console.log(error);
        });

    }

});