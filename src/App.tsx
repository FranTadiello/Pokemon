import { useEffect, useState } from "react";
import { PokemonList, Pokemon } from "./components/PokemonList";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [buscarNome, setBuscarNome] = useState("");
  const [tipoSelecionado, setTipoSelecionado] = useState("");

  useEffect(() => {
    async function carregarPokemons() {
      const response = await fetch("http://localhost:8080/pokemon");
      const data = await response.json();
      setPokemons(data);
    }

    carregarPokemons();
  }, []);

  const filtraPokemon = pokemons.filter(pokemon => {
    const nomeIgual = pokemon.name.toLowerCase().includes(buscarNome.toLowerCase());
    const tipoIgual = tipoSelecionado === "" || pokemon.types.includes(tipoSelecionado);

    return nomeIgual && tipoIgual;
  });

  return (
    <div>
      <h1>Pokémons</h1>
      <input
        type="text"
        placeholder="Buscar por nome"
        value={buscarNome}
        onChange={(e) => setBuscarNome(e.target.value)}
      />

      <select
        value={tipoSelecionado}
        onChange={(e) => setTipoSelecionado(e.target.value)}
      >
        <option value="">Todos os tipos</option>
        <option value="grass">Planta</option>
        <option value="fire">Fogo</option>
        <option value="water">Água</option>
        <option value="electric">Elétrico</option>
        <option value="psychic">Psíquico</option>
        <option value="rock">Pedra</option>
        <option value="ground">Terra</option>
        <option value="ice">Gelo</option>
        <option value="bug">Inseto</option>
        <option value="dragon">Dragão</option>
        <option value="ghost">Fantasma</option>
        <option value="dark">Sombrio</option>
        <option value="steel">Aço</option>
        <option value="fairy">Fada</option>
        <option value="fighting">Lutador</option>
        <option value="normal">Normal</option>
        <option value="poison">Veneno</option>
        <option value="flying">Voador</option>
      </select>

      {filtraPokemon.length === 0 ? (
        <p style={{ color: "#888" }}>
          Nenhum Pokémon encontrado com esse nome e tipo.
        </p>
      ) : (
        <PokemonList pokemons={filtraPokemon} />
      )}
    </div>
  );
}

export default App;