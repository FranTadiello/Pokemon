import { useEffect, useState } from "react";
import { PokemonList } from "./components/PokemonList";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function carregarPokemons() {
      const response = await fetch("http://localhost:8080/pokemon");
      const data = await response.json();
      setPokemons(data);
    }

    carregarPokemons();
  }, []);

  return (
    <div>
      <h1>Pokémons</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;