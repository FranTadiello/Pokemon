
import path from "path";
import fs from "fs/promises";
import { calcularFraqueza } from "../utils/calcularFraqueza";

const pathJSON = path.resolve(__dirname, "../data/pokemons.json");

class PokemonServices {

    public static async buscaPokemon(): Promise<any> {
        try {
            const data = await fs.readFile(pathJSON, "utf-8");
            const pokemons = JSON.parse(data);

            const pokemonsComFraquezas = pokemons.map((pokemon: any) => {
                const fraquezas = calcularFraqueza(pokemon.types);
                return { ...pokemon, fraquezas };
            });

            return pokemonsComFraquezas;
        } catch (error) {
            console.error("Erro ao ler o arquivo de pokémons:", error);
            throw error;
        }
    }

    public static async buscaIdPokemon(id: number): Promise<any> {
        try {
            const data = await fs.readFile(pathJSON, "utf-8");
            const pokemons = JSON.parse(data);
            const pokemon = pokemons.find((pokemon: any) => pokemon.id === id);

            if (!pokemon) return null;

            const fraquezas = calcularFraqueza(pokemon.types);
            return { ...pokemon, fraquezas };
        } catch (error) {
            console.error("Erro ao buscar pokémon:", error);
            throw error;
        }
    }
}

export { PokemonServices };