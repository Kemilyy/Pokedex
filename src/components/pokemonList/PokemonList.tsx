import type {Pokemon} from '../../types/pokemon'
import PokemonCard from '../pokemonCard/PokemonCard'

interface PokemonListProps{
    pokemons: Pokemon[]
}

function PokemonList({pokemons}: PokemonListProps){
    return(
        <div className="pokemon-list">
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    )
}

export default PokemonList