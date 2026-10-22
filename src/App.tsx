import dadosJson from './data/pokedex-data.json'
import PokemonList from './components/pokemonList/PokemonList'
import type { PokedexData } from './types/pokemon'
import { useState } from 'react'
import SearchBar from './components/searchBar/SearchBar'
import TypeFilter from './components/typeFilter/TypeFilter'

const dados: PokedexData = dadosJson as PokedexData

function App() {
  const [busca, setBusca] = useState('')
  const textoBusca = busca.toLowerCase()
  const [tipoSelecionado, setTipoSelecionado] = useState('')

  const pokemonsFiltrados = dados.pokemon.filter((item) => {
    const passaNaBusca = item.name.toLowerCase().includes(textoBusca) || 
      String(item.id).includes(textoBusca)
    const passaNoTipo = tipoSelecionado === '' || 
      (tipoSelecionado === 'Typeless' && item.types.length === 0) ||
      item.types.some((t) => t.name === tipoSelecionado)

    return passaNaBusca && passaNoTipo
  })

  return (
    <div>
      <h1>Pokédex</h1>
      <SearchBar value={busca} onChange={setBusca} />
      <TypeFilter
        types={dados.types}
        value={tipoSelecionado}
        onChange={setTipoSelecionado}
      />
      <PokemonList pokemons={pokemonsFiltrados} />
    </div>
  )
}

export default App