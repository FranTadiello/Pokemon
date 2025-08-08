import { useEffect, useState } from "react";
import { PokemonList, Pokemon } from "./components/PokemonList";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [buscarNome, setBuscarNome] = useState("");
  const [tipoSelecionado, setTipoSelecionado] = useState("");
  const [fraquezaSelecionada, setFraquezaSelecionada] = useState("");

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
    const fraquezaIgual = fraquezaSelecionada === "" || pokemon.fraquezas.includes(fraquezaSelecionada);

    return nomeIgual && tipoIgual && fraquezaIgual;
  });

  return (
    <div className="app">
      <h1>Pokémons</h1>
      < div className="filtros">
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
          <option value="grass">grass</option>
          <option value="fire">fire</option>
          <option value="water">water</option>
          <option value="electric">electric</option>
          <option value="psychic">psychic</option>
          <option value="rock">rock</option>
          <option value="ground">ground</option>
          <option value="ice">ice</option>
          <option value="bug">bug</option>
          <option value="dragon">dragon</option>
          <option value="ghost">ghost</option>
          <option value="dark">dark</option>
          <option value="steel">steel</option>
          <option value="fairy">fairy</option>
          <option value="fighting">fighting</option>
          <option value="normal">normal</option>
          <option value="poison">poison</option>
          <option value="flying">flying</option>
        </select>

        <select
          value={fraquezaSelecionada}
          onChange={(e) => setFraquezaSelecionada(e.target.value)}
        >
          <option value="">Todas as fraquezas</option>
          <option value="grass">grass</option>
          <option value="fire">fire</option>
          <option value="water">water</option>
          <option value="electric">electric</option>
          <option value="psychic">psychic</option>
          <option value="rock">rock</option>
          <option value="ground">ground</option>
          <option value="ice">ice</option>
          <option value="bug">bug</option>
          <option value="dragon">dragon</option>
          <option value="ghost">ghost</option>
          <option value="dark">dark</option>
          <option value="steel">steel</option>
          <option value="fairy">fairy</option>
          <option value="fighting">fighting</option>
          <option value="normal">normal</option>
          <option value="poison">poison</option>
          <option value="flying">flying</option>
        </select>

      </div>

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