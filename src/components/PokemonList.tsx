

type Pokemon = {
    id: number;
    name: string;
    types: string[];
    fraquezas?: string[];
};

interface Props {
    pokemons: Pokemon[];
}

export const PokemonList: React.FC<Props> = ({pokemons}) => { 
  
  return (
        <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
          <h2>{pokemon.name}</h2>
          <p><strong>Tipos:</strong> {pokemon.types.join(", ")}</p>
          <p><strong>Fraquezas:</strong> {pokemon.fraquezas?.length ? pokemon.fraquezas.join(", ") : "Nenhuma"}</p>
        </div>
      ))}
    </div>
    );
};