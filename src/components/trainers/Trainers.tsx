
import './Trainers.css'
import type { Pokemon } from '../../types/pokemon'

interface Trainer {
  id: number
  name: string
  badges: number
  pokemonIds: number[]
}

interface TrainersProps {
  trainers: Trainer[]
  pokemons: Pokemon[]
}

function Trainers({ trainers, pokemons }: TrainersProps) {
  return (
    <section className="trainers-page">
      <div className="trainers-heading">
        <span className="trainers-eyebrow">POKÉDEX / TREINADORES</span>
        <h1>Treinadores</h1>
        <p>Conheça os treinadores e seus Pokémon.</p>
      </div>

      <div className="trainers-grid">
        {trainers.map((trainer) => {
          const pokemonsDoTreinador = trainer.pokemonIds
            .map((id) => pokemons.find((pokemon) => pokemon.id === id))
            .filter((pokemon) => pokemon !== undefined)

          return (
            <article className="trainer-card" key={trainer.id}>
              <div className="trainer-card-top">
                <span className="trainer-number">
                  TREINADOR #{String(trainer.id).padStart(2, '0')}
                </span>

                <span className="trainer-badges">
                  <span aria-hidden="true">★</span>
                  {trainer.badges} insígnias
                </span>
              </div>

              <h2>{trainer.name}</h2>

              <p className="trainer-pokemon-count">
                {trainer.pokemonIds.length}{' '}
                {trainer.pokemonIds.length === 1
                  ? 'Pokémon relacionado'
                  : 'Pokémon relacionados'}
              </p>

              <div className="trainer-pokemon-list">
                {pokemonsDoTreinador.map((pokemon, index) => (
                  <div
                    className="trainer-pokemon"
                    key={`${trainer.id}-${pokemon.id}-${index}`}
                    title={pokemon.name}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
                      alt={pokemon.name}
                      loading="lazy"
                    />
                    <span>{pokemon.name}</span>
                  </div>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Trainers
