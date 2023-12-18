import {config} from "dotenv";
config()

import fastify from "fastify";

import cors from "@fastify/cors"
import { userRoutes } from "./routes/users";

const app = fastify();
app.register(cors, {origin: process.env.CLIENT_URL})
app.register(userRoutes)


app.get('/', (req, res)=> {
    res.send('Chat app\'s server is running to fast')
})


app.listen({port: parseInt(process.env.PORT!)}, ()=> {
    console.log('Chat server is listening on port', process.env.PORT)
});