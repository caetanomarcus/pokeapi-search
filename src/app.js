import express from "express";
import db from "./config/dbConnect.js";

import routes from './routes/index.js';
import { getAllPokemons } from "./utils/index.js";

db.on("error", console.log.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
})

const app = express();
app.use(express.json());
routes(app)

// setInterval(getAllPokemons, 604800000);

export default app;