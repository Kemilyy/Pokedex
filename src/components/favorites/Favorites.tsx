
import './Favorites.css'
import type { Pokemon } from '../../types/pokemon'
import PokemonList from '../pokemonList/PokemonList'

interface FavoritesProps {
  pokemons: Pokemon[]
  onSelect: (id: number) => void
  favoritos: number[]
  onToggleFavorite: (id: number) => void
}

function Favorites({
  pokemons,
  onSelect,
  favoritos,
  onToggleFavorite,
}: FavoritesProps) {
  return (
    <section className="favorites-page">
      <div className="favorites-heading">
        <span className="favorites-eyebrow">
          POKÉDEX / COLEÇÃO PESSOAL
        </span>

        <h1>Favoritos</h1>
        <p>Seus Pokémon favoritos em um só lugar.</p>
      </div>

      {pokemons.length === 0 ? (
        <div className="favorites-empty">
          <span className="favorites-empty-icon">♡</span>
          <h2>Nenhum favorito por enquanto</h2>
          <p>
            Volte à Pokédex e marque seus Pokémon preferidos
            para encontrá-los aqui.
          </p>
        </div>
      ) : (
        <PokemonList
          pokemons={pokemons}
          onSelect={onSelect}
          favoritos={favoritos}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </section>
  )
}

export default Favorites
