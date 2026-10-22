export interface PokemonType {
    id: number
    name: string
}

export interface PokemonStats {
    hp: number
    attack: number
    defense: number
    specialAttack: number
    specialDefense: number
    speed: number
}

export interface Pokemon {
    id: number
    name: string
    stats: PokemonStats
    types: PokemonType[]
}

export interface Trainer {
    id: number
    name: string
    badges: number
    pokemonIds: number[]
}

export interface PokedexData {
    types: PokemonType[]
    pokemon: Pokemon[]
    trainers: Trainer[]
}

export type StatKey = keyof Pokemon['stats']