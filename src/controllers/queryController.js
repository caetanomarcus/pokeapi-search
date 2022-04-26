import axios from 'axios';
import pokemonList from '../models/pokemonList.js';


class QueryController {

    static async getAll(req, res) {
       try {
        pokemonList.findOne().exec((err, data) => {
         res.status(200).json(data)
        });

        } catch (error) {
            console.log(error)
        }     
    }

    static async getPokemonByName(req, res) {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`)
            const data = response.data
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
    }

    static async getSugestionList(req, res) {
 
       pokemonList.findOne().exec((err, data) => {
            if (err) {
                throw err;
            } else {
                const sugestionList = data.pokemon?.filter(pokemon => pokemon?.name?.toLowerCase().includes(req?.query?.name?.toLowerCase()));
                res.status(200).json(sugestionList)
            }
        });
    }
}

export default QueryController;