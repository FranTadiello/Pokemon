import "../App.css";

export type Pokemon = {
  id: number;
  name: string;
  types: string[];
  fraquezas: string[];
};

interface Props {
  pokemons: Pokemon[];
}

export const PokemonList: React.FC<Props> = ({ pokemons }) => {

  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <div className="pokemon-card" key={pokemon.name}>
          <h2>{pokemon.name}</h2>
          <p><strong>Tipos:</strong> {pokemon.types.join(", ")}</p>
          <p><strong>Fraquezas:</strong> {pokemon.fraquezas.length ? pokemon.fraquezas.join(", ") : "Nenhuma"}</p>
        </div>
      ))}
    </div>
  );
};