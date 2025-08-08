import Router from "express";
import {PokemonController} from "../controllers/pokemonController";

export const router = Router();

router.get("/pokemon", PokemonController.getAllPokemon);
router.get("/pokemon/:id", PokemonController.getIdPokemon);

