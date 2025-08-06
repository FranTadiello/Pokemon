import { Request, Response } from "express";
import {PokemonServices} from "../services/pokemonServices";

class PokemonController {
    static getAllPokemon = async (req: Request, res: Response) => {
        try {
            const pokemons = await PokemonServices.buscaPokemon();

            if (!pokemons || pokemons.length === 0) {
                return res.status(404).json({ mensagem: "Nenhum pokemon encontrado :(" })
            }

            res.status(200).json(pokemons);
        } catch (error) {
            console.error("Erro ao buscar pokemons:", error);

            res.status(500).json({
                mensagem: "Erro ao buscar pokemons",
                detalhe: error instanceof Error ? error.message : String(error)
            })
        }
    }
}

export { PokemonController };