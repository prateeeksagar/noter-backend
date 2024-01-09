import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {ApiRoutes} from "./routes/index.js";

import { PORT } from "./config/serverConfig.js"; 

const startServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(cors())
    app.use("/api",ApiRoutes);
    app.listen(PORT, () => {
        console.log(`server started at ${PORT}`);
    })   

}

startServer();

