
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
}

export { PokemonServices };