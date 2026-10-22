import type { PokemonType } from '../../types/pokemon'

interface TypeFilterProps {
    types: PokemonType[]
    value: string
    onChange: (tipo: string) => void
}

function TypeFilter({ types, value, onChange }: TypeFilterProps) {
    return (
        <select
            className="type-filter"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            <option value="">Todos os tipos</option>
            {types.map((tipo) => (
                <option key={tipo.id} value={tipo.name}>
                    {tipo.name}
                </option>
            ))}
        </select>
    )
}


export default TypeFilter