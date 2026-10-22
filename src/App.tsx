import dadosJson from './data/pokedex-data.json'
import PokemonList from './components/pokemonList/PokemonList'
import type { PokedexData } from './types/pokemon'
import {useState} from 'react'
import SearchBar from './components/searchBar/SearchBar'


const dados: PokedexData = dadosJson as PokedexData

function App() {
  const [busca, setBusca] = useState('')
  const textoBusca = busca.toLowerCase()
  const pokemonsFiltrados = dados.pokemon.filter((item) =>
    item.name.toLowerCase().includes(textoBusca) ||
    String(item.id).includes(textoBusca)
  )

  return (
    <div>
      <h1>Pokédex</h1>
      <SearchBar value={busca} onChange={setBusca} />
      <PokemonList pokemons={pokemonsFiltrados} />
    </div>
  )
}

export default App