
import './PokemonList.css'
import type { Pokemon } from '../../types/pokemon'
import PokemonCard from '../pokemonCard/PokemonCard'

interface PokemonListProps {
  pokemons: Pokemon[]
  onSelect: (id: number) => void
  favoritos: number[]
  onToggleFavorite: (id: number) => void
}

function PokemonList({
  pokemons,
  onSelect,
  favoritos,
  onToggleFavorite,
}: PokemonListProps) {
  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onSelect={onSelect}
          isFavorite={favoritos.includes(pokemon.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  )
}

export default PokemonList
