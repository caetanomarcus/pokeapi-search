import axios from "axios";
import pokemonList from "../models/pokemonList.js";

export const getAllPokemons = async () => {
    console.log('querying pokeapi.co...');
 
    try {
        const response = await axios.get(
            "https://pokeapi.co/api/v2/pokemon?limit=1200&offset=0"
        );
         const dados = response.data.results;

        pokemonList.findOneAndUpdate({}, { pokemon: dados }, { new: true, upsert: true }, (err, data) => {
            if (!err) {
                if(!data){
                    data = new pokemonList({
                        pokemon: dados
                    });
                }

                 data.save((err, res) => {
                    if (err) {
                        throw err;
                    } else {
                        console.log('Query executed successfully!');
                    }
                });
            } 
        }
        );
      

    } catch (error) {
        console.log(error);
    }

   

   
};