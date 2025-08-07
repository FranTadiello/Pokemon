import { PokemonList } from "./components/PokemonList";
import pokemons from "./data/pokemons.json";

function App() {
  return (
    <div>
      <h1>Pokémons</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;