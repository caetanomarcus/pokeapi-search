import express from "express";
import QueryController from "../controllers/queryController.js";

const router = express.Router();

router
    .get('/all', QueryController.getAll)
    .get('/sugestion', QueryController.getSugestionList)
    .get('/:name', QueryController.getPokemonByName)

    
    
export {router as all};