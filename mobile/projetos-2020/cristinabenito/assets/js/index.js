function abrir() {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('tela-cadastro').style.display = 'none';
    document.getElementById('tela-login').style.display = 'block';
}

function fechar() {
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('user').value = '';
    document.getElementById('key').value = '';
    document.getElementById('cadastro-user').value = '';
    document.getElementById('cadastro-senha').value = '';
    document.getElementById('cadastro-confirma-senha').value = '';
    document.getElementById('painel-erro-login').style.display = 'none';
    document.getElementById('painel-erro-cadastro').style.display = 'none';
}

function entrar() {
    let usuario = document.getElementById('user').value;
    let senha = document.getElementById('key').value;
    if (usuario.length < 3) {
        document.getElementById('painel-erro-login').innerHTML = 'E-mail é obrigatório e deve ter mais que três caracteres!'
    } else if (senha.length < 3) {
        document.getElementById('painel-erro-login').innerHTML = 'Senha é obrigatória e deve ter mais que três caracteres!'
    } else {
        axios.post('https://reqres.in/api/login', {
            email: usuario,
            password: senha,
        }).then((resposta) => {
            let token = (resposta.data.token);
            localStorage.setItem('token', token);
            fechar();
            document.getElementById('busca').style.display = 'block'
            document.getElementById('user-icon').style.display = 'inline'
        }).catch((erro) => {
            document.getElementById('painel-erro-login').innerHTML = 'Usuário não cadastrado!'
        })
    }
}

function abrirCadastro() {
    document.getElementById('tela-login').style.display = 'none';
    document.getElementById('tela-cadastro').style.display = 'block';
}

function cadastrar() {
    let usuario = document.getElementById('cadastro-user').value;
    let senha = document.getElementById('cadastro-senha').value;
    let confSenha = document.getElementById('cadastro-confirma-senha').value;

    if (senha !== confSenha) {
        document.getElementById('painel-erro-cadastro').innerHTML = 'Senha não confere!'
    } else if (usuario.length < 3) {
        document.getElementById('painel-erro-cadastro').innerHTML = 'E-mail é obrigatório e deve ter mais que três caracteres!'
    } else if (senha.length < 3) {
        document.getElementById('painel-erro-cadastro').innerHTML = 'Senha é obrigatória e deve ter mais que três caracteres!'
    } else {
        axios.post('https://reqres.in/api/register', {
            email: usuario,
            password: senha,
        }).then((resposta) => {
            document.getElementById('painel-sucesso-login').innerHTML = 'Cadastro realizado com Sucesso! Faça seu login.'
            fechar();
            abrir();
        }).catch((erro) => {
            document.getElementById('painel-erro-cadastro').innerHTML = 'Tente Novamente!'
        })
    }
}

function buscar() {
    let campoBusca = document.getElementById('campo-buscar').value;
    document.getElementById('lista-resultados').innerHTML = '';
    axios.get(`https://api.tvmaze.com/search/shows?q=${campoBusca}`)
        .then((resposta) => {
            let lista = resposta.data;
            console.log(lista)
            let containerLista = document.getElementById('lista-resultados');

            for (let i = 0; i < lista.length; i++) {
                let li = document.createElement('li');
                let texto = lista[i].show.name;
                li.className = 'display-col my-flex my-justify-content-between';
                containerLista.appendChild(li);
                let link = document.createElement('a');
                let categoria = document.createElement('span');
                let imagem = document.createElement('img');
                link.setAttribute('href', lista[i].show.officialSite);
                link.innerHTML = texto;
                categoria.innerHTML = lista[i].show.type;
                if (lista[i].show.image) {
                    if (lista[i].show.image.medium) {
                        imagem.setAttribute('src', lista[i].show.image.medium);
                    } else {
                        imagem.setAttribute('src', lista[i].show.image.original);
                    }
                }
                link.className = 'my-link'
                li.appendChild(link);
                li.appendChild(categoria);
                li.appendChild(imagem);
            }
        })
}

function verificarLogin() {
    let token = localStorage.getItem('token');
    if (token !== null) {
        document.getElementById('busca').style.display = 'block';
        document.getElementById('user-icon').style.display = 'inline';
    }
}

function deslogar() {
    localStorage.removeItem('token');
    document.getElementById('busca').style.display = 'none';
    document.getElementById('user-icon').style.display = 'none';

}