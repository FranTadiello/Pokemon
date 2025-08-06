
import path from "path";
import fs from "fs/promises";

const pathJSON = path.resolve(__dirname, "../data/pokemons.json");

class PokemonServices {

    public static async buscaPokemon(): Promise<any> {
        try {
            const data = await fs.readFile(pathJSON, "utf-8");
            const pokemons = JSON.parse(data);
            return pokemons;
        } catch (error) {
            console.error("Erro ao ler o arquivo de pokémons:", error);
            throw error;
        }
    }
    
    public static async buscaIdPokemon(id: number): Promise<any> {
        try {
            const data = await fs.readFile(pathJSON, "utf-8");
            const pokemons = JSON.parse(data);
            const pokemon = pokemons.find((pokemon:any) => pokemon.id === id);
            return pokemon  || null;
        } catch (error) {
            console.error("Erro ao buscar pokémon:", error);
            throw error;
        }
    }
}

export { PokemonServices };