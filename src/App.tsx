import dadosJson from './data/pokedex-data.json'
import PokemonList from './components/pokemonList/PokemonList'
import type { PokedexData } from './types/pokemon'

const dados: PokedexData = dadosJson as PokedexData

function App() {
  return (
    <div>
      <h1>Pokédex</h1>
      <PokemonList pokemons={dados.pokemon} />
    </div>
  )
}

export default App