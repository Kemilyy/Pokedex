import type { StatKey } from '../types/pokemon'

export const STATS: { label: string; key: StatKey }[] = [
    { label: 'HP', key: 'hp' },
    { label: 'Attack', key: 'attack' },
    { label: 'Defense', key: 'defense' },
    { label: 'Sp. Attack', key: 'specialAttack' },
    { label: 'Sp. Defense', key: 'specialDefense' },
    { label: 'Speed', key: 'speed' },
]