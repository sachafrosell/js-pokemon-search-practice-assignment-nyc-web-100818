document.addEventListener('DOMContentLoaded', () => {

  const pokemonContainer = document.getElementById('pokemon-container')
  const noPokemonMessage = document.querySelector('center')
  const pokemons = []

  pokemonContainer.addEventListener('click', (event) => {
    if (event.target.className === "toggle-sprite") {
      let id = event.target.dataset.id;
      let spriteImgElement = document.querySelector(`[data-id="${id}"]`);
      let toggledPokemon = allPokemon.find(pokemon => (pokemon.id == id) )
      let front = toggledPokemon.sprites.front
      let back = toggledPokemon.sprites.back
      if (spriteImgElement.src == front) {
        spriteImgElement.src = back;
      } else {
        spriteImgElement.src = front;
      };
    };
  })

  fetch('http://localhost:3000/pokemon', { method: 'GET'})
  .then(response => {
    if (response.ok) {
      noPokemonMessage.remove()
      return response.json()
    }
  })
  .then(data => {
    data.forEach(pokemon => {
      let newPokemon = new Pokemon(pokemon);
      pokemonContainer.innerHTML +=
      `<div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text"> ${newPokemon.name} </h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img data-id="${newPokemon.id}" data-action="flip" class="toggle-sprite" src='${newPokemon.sprites.front}'>
            </div>
          </div
        </div>
      </div>`
    })
  })
})

const filterPokemon = () => {
  const allPokemonDiv = document.getElementById('pokemon-container');
  const searchField = document.getElementById('pokemon-search-input');
  let searchParams = searchField.value.toUpperCase();
  let pokemonDivsArray = allPokemonDiv.querySelectorAll('.pokemon-container')
  pokemonDivsArray.forEach(pokemon => {
    let detailsDiv = pokemon.querySelector('h1')
    let pokemonName = detailsDiv.innerText.toUpperCase()
    if (pokemonName.includes(searchParams)) {
      pokemon.style.display = ''
    } else {
      pokemon.style.display = 'none'
    };
  })
};
