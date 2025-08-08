import Router from "express";
import {PokemonController} from "../controllers/pokemonController";

export const router = Router();

router.get("/pokemon", PokemonController.getAllPokemon);
router.get("/pokemon/:id", PokemonController.getIdPokemon);
//router.post("/pokemon/fraquezas", PokemonController.getFraquezasPorTipo);
//router.put("/pokemon/:id", PokemonController.atualizarPokemon);
//router.delete("/pokemon/:id", PokemonController.deletarPokemon);