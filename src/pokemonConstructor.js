const allPokemon = []

class Pokemon {
  constructor(pokemon) {
    this.id = pokemon.id;
    this.name = pokemon.name;
    this.sprites = pokemon.sprites;
    this.height = pokemon.height;
    this.weight = pokemon.weight;
    this.abilities = pokemon.abilities;
    this.moves = pokemon.moves;
    this.stats = pokemon.stats;
    allPokemon.push(this)
  }
}
