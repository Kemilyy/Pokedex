import { useEffect } from 'react'
import './PokemonDetails.css'
import type { Pokemon } from '../../types/pokemon'
import { STATS } from '../../constants/stats'
import { TYPELESS } from '../../constants/pokedex'
import StatBar from '../statBar/StatBar'

interface PokemonDetailsProps {
    pokemon: Pokemon
    onClose: () => void
}

function PokemonDetails({ pokemon, onClose }: PokemonDetailsProps) {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey) 
    }, [onClose])

    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`

    return (
        <div className="overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Fechar">✕</button>

                <h2>#{String(pokemon.id).padStart(3, '0')} {pokemon.name}</h2>
                <img src={url} alt="" />

                <p>
                    {pokemon.types.length === 0
                        ? TYPELESS
                        : pokemon.types.map((t) => t.name).join(' / ')}
                </p>

                {STATS.map((s) => (
                    <StatBar key={s.key} label={s.label} value={pokemon.stats[s.key]} />
                ))}
            </div>
        </div>
    )
}

export default PokemonDetails