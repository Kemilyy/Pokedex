
import dadosJson from './data/pokedex-data.json'
import PokemonList from './components/pokemonList/PokemonList'
import PokemonDetails from './components/pokemonDetails/PokemonDetails'
import SearchBar from './components/searchBar/SearchBar'
import TypeFilter from './components/typeFilter/TypeFilter'
import Header from './components/header/Header'
import Trainers from './components/trainers/Trainers'
import './App.css'

import type { PokedexData } from './types/pokemon'
import { TYPELESS } from './constants/pokedex'
import { useState } from 'react'

const dados: PokedexData = dadosJson as PokedexData

interface Trainer {
  id: number
  name: string
  badges: number
  pokemonIds: number[]
}

const treinadores = (
  dadosJson as PokedexData & { trainers: Trainer[] }
).trainers

function App() {
  const [busca, setBusca] = useState('')
  const [tipoSelecionado, setTipoSelecionado] = useState('')
  const [idSelecionado, setIdSelecionado] = useState<number | null>(null)
  const [paginaAtiva, setPaginaAtiva] = useState('pokedex')

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
        paginaAtiva={paginaAtiva}
        onMudarPagina={setPaginaAtiva}
      />

      <main className="app">
        {paginaAtiva === 'treinadores' ? (
          <Trainers
            trainers={treinadores}
            pokemons={dados.pokemon}
          />
        ) : (
          <>
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
          </>
        )}
      </main>
    </>
  )
}

export default App
