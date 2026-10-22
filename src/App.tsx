
import dadosJson from './data/pokedex-data.json'
import PokemonList from './components/pokemonList/PokemonList'
import PokemonDetails from './components/pokemonDetails/PokemonDetails'
import SearchBar from './components/searchBar/SearchBar'
import TypeFilter from './components/typeFilter/TypeFilter'
import './App.css'
import Header from './components/header/Header'
import type { PokedexData } from './types/pokemon'
import { TYPELESS } from './constants/pokedex'
import { useState } from 'react'

const dados: PokedexData = dadosJson as PokedexData

function App() {
  const [busca, setBusca] = useState('')
  const [tipoSelecionado, setTipoSelecionado] = useState('')
  const [idSelecionado, setIdSelecionado] = useState<number | null>(null)

  const textoBusca = busca.trim().toLowerCase()

  const pokemonsFiltrados = dados.pokemon.filter((item) => {
    const passaNaBusca =
      item.name.toLowerCase().includes(textoBusca) ||
      String(item.id).includes(textoBusca)

    const passaNoTipo =
      tipoSelecionado === '' ||
      (tipoSelecionado === TYPELESS && item.types.length === 0) ||
      item.types.some((t) => t.name === tipoSelecionado)

    return passaNaBusca && passaNoTipo
  })

  const pokemonSelecionado = dados.pokemon.find(
    (p) => p.id === idSelecionado
  )

  return (
    <>
      <Header
        paginaAtiva="pokedex"
        onMudarPagina={() => {}}
      />

      <main className="app">
        <h1>Pokédex</h1>

        <SearchBar
          value={busca}
          onChange={setBusca}
        />

        <TypeFilter
          types={dados.types}
          value={tipoSelecionado}
          onChange={setTipoSelecionado}
        />

        {pokemonsFiltrados.length === 0 ? (
          <p className="no-results">
            Nenhum Pokémon encontrado.
          </p>
        ) : (
          <PokemonList
            pokemons={pokemonsFiltrados}
            onSelect={setIdSelecionado}
          />
        )}

        {pokemonSelecionado && (
          <PokemonDetails
            pokemon={pokemonSelecionado}
            onClose={() => setIdSelecionado(null)}
          />
        )}
      </main>
    </>
  )
}

export default App
