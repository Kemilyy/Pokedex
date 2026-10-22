interface SearchBarProps {
    value: string
    onChange: (texto: string) => void
}

function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <input
            type="text"
            className="search-bar"
            placeholder="Pesquisar Pokémon..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default SearchBar