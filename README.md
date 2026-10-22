# Pokédex React

Pokédex interativa desenvolvida com **React + Vite + TypeScript** para a Atividade 03, em dupla, utilizando a metodologia de **Pair Programming**. A aplicação permite navegar pela lista de Pokémon, pesquisar por nome ou ID, filtrar por tipo e visualizar os atributos detalhados de cada criatura.

## Integrantes

| Nome | GitHub |
|---|---|
| Kemily Eduardo da Luz | [@seu-usuario](https://github.com/seu-usuario) |
| [Nome da dupla] | [@usuario-da-dupla](https://github.com/usuario-da-dupla) |

## Pré-visualização

<!-- Coloque aqui prints da aplicação. Exemplo: -->
<!-- ![Tela principal](./docs/tela-principal.png) -->
<!-- ![Modal de detalhes](./docs/detalhes.png) -->

## Funcionalidades

- **Listagem de Pokémon** a partir dos dados fornecidos, exibindo ID, nome, tipos e os seis atributos (HP, Attack, Defense, Sp. Attack, Sp. Defense e Speed)
- **Pesquisa** por nome ou ID, atualizada enquanto o usuário digita
- **Filtro por tipo**, construído a partir dos tipos presentes no arquivo de dados, incluindo o caso de Pokémon sem tipo (`Typeless`)
- **Pesquisa e filtro combinados**: os dois funcionam ao mesmo tempo
- **Detalhes do Pokémon** em um modal, com barras de progresso para cada atributo
  - Fecha com o botão ✕, clicando fora do modal ou pressionando `Esc`
  - Os cards podem ser abertos também pelo teclado (`Tab` + `Enter`)
- **Mensagem de estado vazio** quando nenhum Pokémon corresponde à busca

<!-- Adicione aqui as demais funcionalidades implementadas (treinadores, favoritos, ordenação, dark mode etc.) -->

## Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS puro, com um arquivo de estilo por componente

## Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm (já incluso com o Node.js)

### Passo a passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra o navegador no endereço exibido no terminal, normalmente:

   ```
   http://localhost:5173
   ```

### Outros comandos

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `dist` |
| `npm run preview` | Executa localmente a versão gerada pelo build |
| `npm run lint` | Executa o ESLint |

## Dados da aplicação

Os dados utilizados estão em:

```
src/data/pokedex-data.json
```

O arquivo é importado diretamente pela aplicação e é a única fonte de dados: não há banco de dados nem requisição a APIs externas. Ele contém os Pokémon, seus atributos e tipos, além dos treinadores e suas relações com os Pokémon.

## Organização do projeto

```
src/
├── assets/
│   └── images/                 # Imagens utilizadas na interface
├── components/
│   ├── pokemonCard/            # Card de um Pokémon na lista
│   ├── pokemonList/            # Grade com os cards
│   ├── pokemonDetails/         # Modal com os detalhes do Pokémon
│   ├── searchBar/              # Campo de pesquisa por nome ou ID
│   ├── statBar/                # Barra de progresso de um atributo
│   └── typeFilter/             # Filtro por tipo
├── constants/
│   ├── pokedex.ts              # Constantes gerais (ex.: TYPELESS)
│   └── stats.ts                # Lista de atributos e seus rótulos
├── data/
│   └── pokedex-data.json       # Dados fornecidos para a atividade
├── types/
│   └── pokemon.ts              # Tipos TypeScript dos dados
├── App.tsx                     # Componente raiz: estados e composição
├── App.css
├── index.css
└── main.tsx
```

Cada componente fica em sua própria pasta, junto com o seu arquivo `.css`.

### Decisões de arquitetura

- **Estado centralizado no `App`**: busca, tipo selecionado e Pokémon selecionado ficam no componente raiz, que distribui os valores por *props* e recebe as ações por *callbacks*.
- **Lista filtrada como estado derivado**: a lista exibida é calculada a cada renderização a partir da busca e do filtro, sem um `useState` próprio, o que evita dados dessincronizados.
- **Seleção guardada por ID**: o `App` armazena apenas o ID do Pokémon selecionado e busca o objeto correspondente nos dados, evitando manter uma cópia que possa ficar desatualizada.
- **Componentes reutilizáveis**: o `StatBar` não conhece Pokémon e apenas recebe rótulo e valor, e a lista de atributos (`STATS`) é compartilhada entre o card e o modal.
- **Tipagem com TypeScript**: a pasta `types` define o contrato dos dados, e os componentes recebem *props* tipadas.

## Conceitos de React aplicados

- Componentes funcionais
- Props e comunicação entre componentes
- `useState` e estados derivados
- `useEffect` (fechamento do modal com `Esc`, com limpeza do listener)
- Renderização de listas com `map()` e uso de `key`
- Eventos (`onClick`, `onChange`, `onKeyDown`)
- Filtragem de dados e renderização condicional
- Componentes controlados (campo de pesquisa)

## Imagens e APIs externas
As imagens dos Pokémon foram obtidas em [PokéAPI](https://pokeapi.co/)

Nenhuma API externa é necessária para o funcionamento da aplicação.

## Autores

Atividade desenvolvida em dupla com Pair Programming, com revezamento entre piloto e navegador.

- Kemily Eduardo da Luz
- Letícia Xavier Abreu
