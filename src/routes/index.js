import express from "express";
import cors from "cors";
import { all } from "./allRoutes.js";

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send('Api de busca do PokeApi v1.')
    })

    app.use(
        express.json(),
        cors(),
        all
    )
}

export default routes