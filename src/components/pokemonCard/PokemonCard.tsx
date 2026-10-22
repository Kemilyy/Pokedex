
import './PokemonCard.css'
import type { Pokemon } from '../../types/pokemon'
import { STATS } from '../../constants/stats'
import { TYPELESS } from '../../constants/pokedex'

interface PokemonCardProps {
  pokemon: Pokemon
  onSelect: (id: number) => void
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
}

function PokemonCard({
  pokemon,
  onSelect,
  isFavorite,
  onToggleFavorite,
}: PokemonCardProps) {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`

  return (
    <div
      className="pokemon-card"
      role="button"
      tabIndex={0}
      onClick={() => onSelect(pokemon.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect(pokemon.id)
        }
      }}
    >
      <span className="pokemon-id">
        #{String(pokemon.id).padStart(3, '0')}
      </span>

      <button
        type="button"
        className={`pokemon-favorite ${isFavorite ? 'is-favorite' : ''}`}
        aria-label={
          isFavorite
            ? `Remover ${pokemon.name} dos favoritos`
            : `Adicionar ${pokemon.name} aos favoritos`
        }
        aria-pressed={isFavorite}
        onClick={(e) => {
          e.stopPropagation()
          onToggleFavorite(pokemon.id)
        }}
      >
        {isFavorite ? '♥' : '♡'}
      </button>

      <img src={url} alt={pokemon.name} />

      <h2 className="pokemon-name">{pokemon.name}</h2>

      <div className="pokemon-types">
        {pokemon.types.length === 0 ? (
          <span className="type type-typeless">{TYPELESS}</span>
        ) : (
          pokemon.types.map((tipo) => (
            <span
              key={tipo.id}
              className={`type type-${tipo.name.toLowerCase()}`}
            >
              {tipo.name}
            </span>
          ))
        )}
      </div>

      <ul className="pokemon-stats">
        {STATS.map((s) => (
          <li key={s.key}>
            {s.label}: {pokemon.stats[s.key]}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PokemonCard
