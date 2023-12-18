import {config} from "dotenv";
config()

import fastify from "fastify";

const app = fastify();


app.get('/', (req, res)=> {
    res.send('Chat app\'s server is running to fast')
})


app.listen({port: parseInt(process.env.PORT!)}, ()=> {
    console.log('Chat server is listening on port', process.env.PORT)
});