const url = "https://pokeapi.co/api/v2/pokemon/1";
const pokeContainer = document.getElementById("pokeContainer");
const qtdPokemon = 150;
const cores = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
    ghost: "#705898",
    ice: "#98d8d8",
};

const tiposPrincipais = Object.keys(cores);

const fetchPokemon = async () => {
    for(let i = 1; i < qtdPokemon; i++) {
        await pegarPokemons(i);
    };
};

const pegarPokemons = async function (id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const resposta = await fetch(url);
    const dados = await resposta.json();
    criarCardPokemon(dados);
};

const criarCardPokemon = function(pokemon){
    const card = document.createElement("div");
    card.classList.add('pokemon');

    const nome = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');

    const pokeTipos = pokemon.types.map((t) => t.type.name);
    const tipo = pokeTipos[0];
    const cor = cores[tipo];
    card.style.backgroundColor = cor;

    const pokemonInnerHTML = `
        <div class="imgContainer">
            <img
                src="https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
                alt="${nome}">
        </div>
        <div class="info">
            <span class="numero">${id}</span>
            <h3 class="nome">${nome}</h3>
            <small class="tipo">Tipo: <span>${tipo}</span></small>
        </div>
    `;

    card.innerHTML = pokemonInnerHTML;
    pokeContainer.appendChild(card);
}


fetchPokemon();