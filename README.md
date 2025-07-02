Neste exercício, você vai desenvolver uma aplicação web completa, onde seu objetivo será consumir uma API que fornece dados de Pokémons e, com base nesses dados, aplicar uma lógica para descobrir as fraquezas de cada um deles.

## Você irá praticar:

- Conexão entre backend e frontend  
- Criação e consumo de endpoints locais ou online (como preferir)  
- Requisições HTTP (GET)  
- Manipulação de objetos e arrays em TypeScript  
- Organização de código em aplicações fullstack (Next.js ou similar)  

## Sobre a API

A API já está pronta e disponível no GitHub caso deseje usar. Ela fornece uma lista de Pokémons em formato JSON, contendo informações como nome, ID e tipos da primeira geração.

### Você pode:

- Clonar o repositório e rodar localmente;  
- Usar o link da API local como fonte de dados no frontend;  
- Ou ainda usar uma API online como a [https://pokeapi.co/](https://pokeapi.co/), [https://pokedexapi.com/](https://pokedexapi.com/) ou [https://pogoapi.net/](https://pogoapi.net/)  

**Exemplo de dados da API (entrada):**

```json
[
  { "id": 1, "name": "pikachu", "types": ["electric"] },
  { "id": 2, "name": "gabite", "types": ["dragon", "ground"] }
]
```

## Sua Tarefa

Crie uma aplicação web que:

- Consuma os dados da API local (endpoint `GET /api/pokemons`)  
- Para cada Pokémon, calcule suas fraquezas com base nos seus tipos  
- Exiba na tela: nome, tipos e fraquezas  
- Permita filtrar os Pokémons por:
  - Nome (input de busca)
  - Tipo (select/dropdown)
  - Fraqueza (select/dropdown)

**Exemplo de saída esperada no frontend:**

```json
{
  "name": "pikachu",
  "types": ["electric"],
  "weakness": ["ground"]
}
```

## Clone o repositório

Navegue até o diretório onde você deseja clonar o repositório:

```bash
cd /caminho/para/seu/diretorio
```

Execute o comando `git clone` com o URL do repositório:

```bash
git clone https://github.com/Wander06/exercicio-pokemon-types.git
```

Isso criará uma cópia local do repositório no seu computador.

Depois de clonar o repositório, entre no diretório do projeto:

```bash
cd exercicio-pokemon-types
```

Lembre-se de usar o comando:

```bash
npm install
```

Para instalar as dependências necessárias, e:

```bash
npm run start
```

Para inicializar a aplicação.
