const lista = document.getElementById('div-hero');
let personagens = {};
let results = [];

const getPersonagens = async () => { // função assíncrona
    //let query = document.querySelector('input').value; // recupera texto do input
    let query = document.getElementById('queryAPI').value // recupera texto do input
    console.log(query); 
        try {
            const res = await fetch(`https://www.superheroapi.com/api.php/3708772112566731/search/${query}`); // capta os dados da API de acordo com a query
            personagens = await res.json();
            results = personagens.results;
            mostrarPersonagens(results);
            
        } catch (falha) {
            console.error(falha);
            
        }
        };
    
    
const mostrarPersonagens = (characters) => {
    const htmlString = characters
        .map((character) => { // array 
            return `       
            <div class="card-hero">
                    <h1>Nome: ${character.name}</h1></a>
                    <h2>Editora: ${character.biography.publisher}</h2></a>
                    <img src="${character.image.url}"></img>
                    <p>Inteligência: ${character.powerstats.intelligence}</p>
                    <p>Força: ${character.powerstats.strength}</p>
                    <p>Poder: ${character.powerstats.power}</p>
                    <p>Durabilidade: ${character.powerstats.durability}</p> 
                
           </div>
        `
        })
        .join('');
    lista.innerHTML = htmlString; // adiciona o conteudo
};

//var button = document.querySelector('button'); // recupera botao
var abutton = document.getElementById("btnAPI");
abutton.addEventListener("click", getPersonagens); // faz carregar a pesquisa ao clicar, chamando a função