import { useEffect, useState } from "react";
import { PokemonList } from "./components/PokemonList";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [buscarNome, setBuscarNome] = useState("");

  useEffect(() => {
    async function carregarPokemons() {
      const response = await fetch("http://localhost:8080/pokemon");
      const data = await response.json();
      setPokemons(data);
    }

    carregarPokemons();
  }, []);

  const filtraNomePokemon = pokemons.filter(pokemon =>
    pokemon.name?.toLowerCase().includes(buscarNome.toLowerCase())
  );

  return (
    <div>
      <h1>Pokémons</h1>
      <input
        type="text"
        placeholder="Buscar por nome"
        value={buscarNome}
        onChange={(e) => setBuscarNome(e.target.value)}
      />
      {filtraNomePokemon.length === 0 ? (
        <p style={{ color: "#888" }}>
          Nenhum Pokémon encontrado com esse nome.
        </p>
      ) : (
        <PokemonList pokemons={filtraNomePokemon} />
      )}
    </div>
  );
}

export default App;