import type { Pokemon } from "../../types/pokemon"

interface PokemonCardProps {
    pokemon: Pokemon
}

function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <div className="pokemon-card">
            <span className="pokemon-id">#{pokemon.id}</span>
            <h2 className="pokemon-name">{pokemon.name}</h2>

            <div className="pokemon-types">
                {pokemon.types.length === 0 ? (
                    <span className="type">Typeless</span>
                ) : (
                    pokemon.types.map((tipo) => (
                        <span key={tipo.id} className="type">
                            {tipo.name}
                        </span>
                    ))
                )}
            </div>

            <ul className="pokemon-stats">
                <li>HP: {pokemon.stats.hp}</li>
                <li>Attack: {pokemon.stats.attack}</li>
                <li>Defense: {pokemon.stats.defense}</li>
                <li>Sp. Attack: {pokemon.stats.specialAttack}</li>
                <li>Sp. Defense: {pokemon.stats.specialDefense}</li>
                <li>Speed: {pokemon.stats.speed}</li>
            </ul>
        </div>
    )
}

export default PokemonCard