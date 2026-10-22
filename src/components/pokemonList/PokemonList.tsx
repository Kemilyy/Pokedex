import './PokemonList.css'
import type { Pokemon } from '../../types/pokemon'
import PokemonCard from '../pokemonCard/PokemonCard'

interface PokemonListProps {
    pokemons: Pokemon[]
    onSelect: (id: number) => void 
}

function PokemonList({ pokemons, onSelect }: PokemonListProps) {
    return (
        <div className="pokemon-list">
            {pokemons.map((pokemon) => (
                <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    onSelect={onSelect}   
                />
            ))}
        </div>
    )
}

export default PokemonList