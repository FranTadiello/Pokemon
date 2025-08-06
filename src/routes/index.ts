import Router from "express";
import {PokemonController} from "../controllers/pokemonController";

export const router = Router();

router.get("/pokemon", PokemonController.getAllPokemon);
router.get("/pokemon/:id", PokemonController.getIdPokemon);
//router.post("/pokemon", PokemonController.adicionarPokemon);
//router.put("/pokemon/:id", PokemonController.atualizarPokemon);
//router.delete("/pokemon/:id", PokemonController.deletarPokemon);