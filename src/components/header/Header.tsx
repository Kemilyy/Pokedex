
import './Header.css'

interface HeaderProps {
  paginaAtiva: string
  onMudarPagina: (pagina: string) => void
}

function Header({
  paginaAtiva,
  onMudarPagina,
}: HeaderProps) {
  const links = [
    { id: 'pokedex', label: 'Pokédex' },
    { id: 'treinadores', label: 'Treinadores' },
    { id: 'favoritos', label: '♡ Favoritos' },
  ]

  return (
    <header className="header">
      <a
        className="header-logo"
        href="#inicio"
        onClick={(event) => {
          event.preventDefault()
          onMudarPagina('pokedex')
        }}
      >
        <span className="logo-symbol">◉</span>
        <span>pokédex</span>
      </a>

      <nav className="header-nav">
        {links.map((link) => (
          <button
            key={link.id}
            className={
              paginaAtiva === link.id
                ? 'header-link active'
                : 'header-link'
            }
            onClick={() => onMudarPagina(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <span className="header-region">
        KANTO / 151
      </span>
    </header>
  )
}

export default Header
