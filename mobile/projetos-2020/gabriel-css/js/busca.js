var btnBuscar = document.getElementById("btn-buscar"),
    input = document.getElementsByClassName("input")[2],
    ul = document.getElementById('ul'),
    not_found = document.getElementsByClassName("not-found")[0];

function limparBusca() {
    ul.innerHTML = "";
    not_found.innerHTML = "";
    not_found.className = "not-found hide";
}

async function buscar() {
    limparBusca();

    if (input.value === "" || !input.value.trim()) {
        not_found.innerHTML = "É necessário informar algum valor para a busca!";
        return not_found.className = "not-found";
    }

    var res = await axios.get('https://api.tvmaze.com/search/shows?q=' + input.value);
    var docs = res.data;

    if (docs.length <= 0) {
        not_found.innerHTML = "Não foram encontrados resultados a partir desta busca!";
        return not_found.className = "not-found";
    }

    for (var i = 0; i < docs.length && i < 10; i++) {
        if (input.value != "") {
            var busca_resultados = document.createElement('div'),
                nome_serie = document.createElement('div'),
                center_container = document.createElement('div'),
                resultado_left = document.createElement('div'),
                img = document.createElement('img'),
                resultado_right = document.createElement('div'),
                estreia = document.createElement('p'),
                generos = document.createElement('p'),
                rate = document.createElement('p'),
                emissora = document.createElement('p'),
                pais = document.createElement('p'),
                site = document.createElement('p'),
                summary = document.createElement('p');

            busca_resultados.className = "busca-resultados";
            nome_serie.className = "nome-serie";
            center_container.className = "center-container";
            resultado_left.className = "resultado-left";
            resultado_right.className = "resultado-right";

            if (docs[i].show.name != null) {
                nome_serie.innerHTML = docs[i].show.name;
            }

            if (docs[i].show.image != null) {
                if (docs[i].show.image.medium != null)
                    img.src = docs[i].show.image.medium;
            } else {
                continue;
            }

            if (docs[i].show.officialSite === null) {
                site.innerHTML = 'Site: unknown';
            } else {
                site.innerHTML = 'Site: ' + docs[i].show.officialSite;
            }

            if (docs[i].show.genres === null) {
                generos.innerHTML = 'Gêneros: unknown';
            } else {
                generos.innerHTML = 'Gêneros: ' + docs[i].show.genres;
            }

            if (docs[i].show.premiered === null) {
                estreia.innerHTML = 'Estreia: unknown';
            } else {
                estreia.innerHTML = 'Estreia: ' + docs[i].show.premiered;
            }

            if (docs[i].show.rating.average === null) {
                rate.innerHTML = 'IMDb rate: unknown';
            } else {
                rate.innerHTML = 'IMDb rate: ' + docs[i].show.rating.average;
            }

            if (docs[i].show.network != null) {
                if (docs[i].show.network.name === null) {
                    emissora.innerHTML = 'Emissora: unknown';
                } else {
                    emissora.innerHTML = 'Emissora: ' + docs[i].show.network.name;
                }

                if (docs[i].show.network.country.name != null) {
                    pais.innerHTML = 'País: ' + docs[i].show.network.country.name;
                } else {
                    pais.innerHTML = 'País: unknown';
                }
            } else if (docs[i].show.webChannel != null) {
                if (docs[i].show.webChannel.name === null) {
                    emissora.innerHTML = 'Emissora: unknown';
                } else {
                    emissora.innerHTML = 'Emissora: ' + docs[i].show.webChannel.name;
                }

                if (docs[i].show.webChannel.country != null) {
                    if (docs[i].show.webChannel.country.name != null)
                        pais.innerHTML = 'País: ' + docs[i].show.webChannel.country.name;
                } else {
                    pais.innerHTML = 'País: unknown';
                }
            }

            if (docs[i].show.summary === null) {
                summary.innerHTML = 'Sinopse: unknown';
            } else {
                summary.innerHTML = 'Sinopse:\n' + docs[i].show.summary;
            }

            resultado_left.appendChild(img);

            resultado_right.appendChild(estreia);
            resultado_right.appendChild(site);
            resultado_right.appendChild(generos);
            resultado_right.appendChild(rate);
            resultado_right.appendChild(emissora);
            resultado_right.appendChild(pais);
            resultado_right.appendChild(summary);


            center_container.appendChild(resultado_left);
            center_container.appendChild(resultado_right);

            busca_resultados.appendChild(nome_serie);
            busca_resultados.appendChild(center_container);

            ul.appendChild(busca_resultados);
        }
    }
}

btnBuscar.addEventListener('click', async() => {
    buscar();
});

input.addEventListener('keyup', async(event) => {
    var key = event.which || event.keyCode;
    if (key == 13) {
        buscar();
    }
});