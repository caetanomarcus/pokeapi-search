import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema({
    name: String,
    url: String
});

const pokemonListSchema = new mongoose.Schema({
    pokemon: [pokemonSchema]
});

const pokemonList = mongoose.model("pokemon", pokemonListSchema);

export default pokemonList;